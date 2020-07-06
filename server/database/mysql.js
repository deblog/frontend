import mysql from 'mysql';
import fs from 'fs';
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

console.log('오홍');

var sql = fs.readFileSync('./database/exec.sql').toString();
export const database = new Database(databaseConfig);

const rows = database.query(sql);
console.log(rows, '!!');
