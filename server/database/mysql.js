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
    self.error = {
      status: null,
      msg: null,
    };
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
        } else {
          connection.beginTransaction(function (err) {
            if (err) {
              connection.rollback(function () {
                connection.release();
              });
            }
          });
          resolve(connection);
        }
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

  async poolAll(list) {
    const self = this;
    const connection = await self.poolConnection();
    await connection.beginTransaction();
    try {
      return Promise.all(list.map(item => self.poolQuery(connection)(item)));
    } catch (err) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  status(code) {
    if (code === 'connect_error') {
      return {
        code: 500,
        msg: 'database connect error',
      };
    }
  }
}

// Tower 손보기
class DatabaseTower extends DataBase {
  constructor(props) {
    super({
      ...props,
      type: 'pool',
    });
  }
  // DEBUG: 만들어야함
  query() {
    const self = this;
    return self.poolQuery(connection);
  }

  // DEBUG: 만들어야함
  singleQuery(sql) {
    const self = this;
    return self.poolSingleQuery.apply(self, [sql]);
  }

  poolWapper(callback) {
    const self = this;
    return async (req, res, next) => {
      let connection;
      try {
        connection = await self.poolConnection();
      } catch (err) {
        db.error = {
          status: true,
          msg: err,
        };
      }
      if (db.error.status) {
        console.log(db.error);
        res.json(self.status('connect_error'));
        return;
      }
      await connection.beginTransaction();
      try {
        const query = self.poolQuery(connection);
        const singleQuery = sql => self.poolSingleQuery.apply(self, [sql]);
        const all = list => self.poolAll.apply(self, [list]);
        const extendObject = {
          query,
          singleQuery,
          all,
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
  wrap(callback) {
    const self = this;
    if (self.config.type === 'pool') {
      return self.poolWapper.apply(self, [callback]);
    }
    if (self.config.type === 'single') {
      console.log('soon..');
    }
  }

  all(querys) {
    const self = this;
    return self.poolAll(querys);
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

// NOTE: begin;
// function (err) {
//   // // DEBUG: 여기부분 생각해봐야함 rollback이 일어나고 relase가 됬을때
//   // if (err) {
//   //   connection.rollback(function () {
//   //     // DEBUG: begin transaction 부분에서 에러가 났을때, 뒤에 메서드들에서 finally로 가나? 테스트해봐야함
//   //     connection.release();
//   //   });
//   // }
// }
