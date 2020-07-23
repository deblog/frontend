import mysql from 'mysql';
import env from '~/config';

const config = {
  local: {
    connect: {
      host: env.MYSQL_HOST,
      port: env.MYSQL_PORT,
      user: env.MYSQL_USER,
      password: env.MYSQL_PASS,
      database: env.MYSQL_DB,

      insecureAuth: true,
    },
    pool: {
      host: env.MYSQL_HOST,
      port: env.MYSQL_PORT,
      user: env.MYSQL_USER,
      password: env.MYSQL_PASS,
      database: env.MYSQL_DB,
      connectionLimit: 30,
    },
  },
};

class DataBase {
  constructor(props) {
    this.initialize(props);
  }
  initialize(props) {
    const self = this;
    self.config = props;
    // set, create
    if (props.type === 'single') {
      // const {connection} = self.single();
      // self.connection = connection(props)
    }
    if (props.type === 'pool') {
      this.pool = mysql.createPool(props.pool);
    }
  }
  poolConnection() {
    const self = this;
    return new Promise((resolve, reject) => {
      self.pool.getConnection(function (err, connection) {
        if (err) {
          reject(err);
          connection.release();
        }
        connection.beginTransaction();
        resolve(connection);
      });
    });
  }
  poolQuery(connection) {
    return function (sql) {
      return new Promise((resolve, reject) => {
        try {
          connection.query(sql, function (err, rows, fileds) {
            if (err) reject(err);
            else resolve(rows);
          });
        } catch (err) {
          console.log(err.message);
          connection.rollback();
          reject(err);
        }
      });
    };
  }

  poolSingleQuery(sql) {
    const self = this;
    const result = self.poolConnection();
    function query(connection) {
      return new Promise(function (resolve, reject) {
        try {
          connection.query(sql, function (err, rows, fileds) {
            if (err) reject(err);
            else resolve(rows);
          });
        } catch (err) {
          console.log(err.message);
          connection.rollback();
        } finally {
          connection.release();
        }
      });
    }
    return result.then(query);
  }
  poolWapper(callback) {
    return async (req, res, next) => {
      const connection = await this.poolConnection();
      await connection.beginTransaction();
      try {
        const query = this.poolQuery(connection);
        const extendObject = {
          query,
        };
        callback(req, res, next, extendObject);
        await connection.commit();
      } catch (error) {
        await connection.rollback();
        throw error;
      } finally {
        connection.release();
      }
    };
  }

  async poolAll(list) {
    const self = this;
    const connection = await this.poolConnection();
    connection.beginTransaction();
    try {
      return Promise.all(list.map(item => self.poolQuery(connection)(item)));
    } catch (err) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  wrap(callback) {
    const self = this;
    if (self.config.type === 'pool') {
      return self.poolWapper.apply(self, [callback]);
    }
    if (self.config.type === 'single') {
      console.log('soon..');
    }
  }
}

class DatabaseTower extends DataBase {
  constructor(props) {
    super({
      ...props,
      type: 'pool',
    });
  }

  singleQuery(sql) {
    return this.poolSingleQuery(sql);
  }
  all(querys) {
    return this.poolAll(querys);
  }
}
const dbPool = new DatabaseTower({
  config: config.local.connect,
  pool: config.local.pool,
});

export const connectConfig = config.local.connect;
export const database = dbPool;
export const db = dbPool;

// single() {
//   const self = this;
//   function query(sql, args) {
//     return new Promise((resolve, reject) => {
//       this.connection.query(sql, args, (err, rows) => {
//         if (err) return reject(err);
//         resolve(rows);
//       });
//     }).catch(err => ({ error: err }));
//   }

//   function close() {
//     return new Promise((resolve, reject) => {
//       this.connection.end(err => {
//         if (err) return reject(err);
//         resolve();
//       });
//     }).catch(err => ({ error: err }));
//   }

//   function connection(props) {
//     return mysql.createConnection(props.config);
//   }
//   return {
//     query,
//     close,
//     connection,
//   };
// }
