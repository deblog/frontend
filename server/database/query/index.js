class Sql {
  constructor(props) {
    this.schema = props.schema || '';
    this.languaugeList = `SELECT * FROM ${this.schema}.languages`;
  }
  getTestUser(id) {
    return `SELECT * FROM ${this.schema}.test where id=${id}`;
  }

  login({ email, password }) {
    return `SELECT * FROM ${this.schema}.users WHERE (email="${email}" ) AND (password="${password}") `;
  }
  signin({ keys, values }) {
    return `INSERT INTO ${this.schema}.users (${keys}) values (${values})`;
  }
}

export const sql = new Sql({
  schema: 'deblog',
});
