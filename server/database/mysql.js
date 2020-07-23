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
class Database {
  constructor(props) {
    this.connection = mysql.createConnection(props.config);
  }
  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    }).catch(err => ({ error: err }));
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err) return reject(err);
        resolve();
      });
    }).catch(err => ({ error: err }));
  }
}

class DatabasePool {
  constructor(props) {
    this.pool = mysql.createPool(props.pool);
  }
  connection() {
    const self = this;
    return new Promise((resolve, reject) => {
      self.pool.getConnection(function (err, connection) {
        connection.beginTransaction();
        resolve(connection);
      });
    });
  }
  executeQuery(connection) {
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

  wrap(callback) {
    const self = this;
    return async (req, res, next) => {
      const connection = await self.connection();
      await connection.beginTransaction();
      try {
        const query = self.executeQuery(connection);
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
}
export const databaseConfig = config.local.connect;

export const database = new DatabasePool({
  config: config.local.connect,
  pool: config.local.pool,
});

export const db = database;
