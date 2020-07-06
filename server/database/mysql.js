const mysql = require('mysql');
const databaseConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'deblog',
  insecureAuth: true,
};

class Database {
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }
  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
}

export const database = new Database(databaseConfig);
