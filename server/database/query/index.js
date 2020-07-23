class Query {
  constructor(props) {
    this.languaugeList = `SELECT * FROM deblog.languages`;
  }
  queryLanguaugeList() {
    `SELECT * FROM deblog.languages`;
  }
  login({ email, password }) {
    return `SELECT * FROM deblog.users WHERE (email="${email}" ) AND (password="${password}") `;
  }
  signin({ keys, values }) {
    return `INSERT INTO deblog.users (${keys}) values (${values})`;
  }
}

export const query = new Query();
