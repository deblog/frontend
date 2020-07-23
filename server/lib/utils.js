import _ from 'lodash';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { config } from '~/lib/config';
import { mapper } from '~/lib/mapper';

export { mapper } from '~/lib/mapper';
export { config } from '~/lib/config';
export const api = mapper.api;

class Token {
  constructor(props) {
    this.token = null;
    // 60 * 60 * 12 //24시간 1일
    // this.expired = 10;
    this.expired = 60 * 60 * 12;
    this.checkDelay = 60 * 60 * 1;
    this.secret = props.secret;
  }
  create() {
    const self = this;
    const uuid = uuidv4();
    const nowDate = moment().unix();
    const payload = {
      iat: nowDate,
      exp: nowDate + self.expired, // 24시간, 1일
      data: {
        uuid: uuid,
        userCode: '',
        state: 'local',
      },
    };

    return {
      token: jwt.sign(payload, self.secret),
      uuid,
      nowDate,
    };
  }
  verify(token, secret) {
    const self = this;
    return jwt.verify(token, secret || self.secret, function (err, payload) {
      if (err) {
        self.clear();
        return {
          authCheck: false,
          error: err,
        };
      } else {
        // success
        return {
          authCheck: true,
          payload,
        };
      }
    });
  }
  renewal() {
    const token = this.create();
    this.set(token);
    return this.get();
  }
  set(token) {
    this.token = token;
  }
  get() {
    return this.token;
  }
  clear() {
    return (this.token = null);
  }
}

export const token = new Token({
  secret: config.jwt.secret,
});

export function errorState(rows) {
  /**
   * result 0 => 데이터 없음
   * result 1 => 데이터 가져옴
   * result 2 => 값이 잘못옴
   * result 3 =>
   * result 4 =>
   * result 5 => 서버쪽 에러
   */
  console.log(rows);
  const { code, sqlMessage, errno } = rows.error;
  if (code === 'ER_DUP_ENTRY') {
    return {
      result: 2,
      errMessage: sqlMessage,
      errno: errno,
    };
  }
}

/**
 * NOTE: object를 insert형식의 keys,values 객체로 반환
 * @param {*} obj
 * @param {*} types
 */
export function convertObjectToCommaString(obj) {
  return {
    keys: Object.keys(obj).join(', '),
    values: Object.values(obj)
      .map(i => `"${i}"`)
      .join(', '),
  };
}

export function convertObjectToUpdateQuery(obj) {
  const updateString = _.reduce(
    Object.entries(obj),
    (acc, [key, value]) => {
      if (value.length !== 0) acc += `${key}="${value}", `;
      return acc;
    },
    '',
  );
  return removeLastComma(updateString);
}

export function removeLastComma(strng) {
  var n = strng.lastIndexOf(',');
  var a = strng.substring(0, n);
  return a;
}
