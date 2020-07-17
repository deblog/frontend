// import moment from 'moment';
// import { ENV_MODE_DEV } from 'lib/setting';
import _ from 'lodash';
import { CurrentRef } from '@/types/global.d';

/**
 * NOTE: 매개변수로 들어온 값이 10 이하일때 0을 붙혀줍니다.
 * @param {*} num
 */
export const withZeroNum = (num: number) => {
  if (Number(num) <= 0) {
    return num;
  } else {
    return Number(num) < 10 ? `0${num}` : num;
  }
};

/**
 *
 * @param {*} target
 */
export function getElementSize(target: CurrentRef) {
  if (target) {
    const { clientWidth, clientHeight } = target;
    return { x: clientWidth, y: clientHeight };
  }
  return { x: null, y: null };
}

/**
 * NOTE: 스토리지 맵핑 오브젝트
 */
export const storage = {
  set(key: string, value: string) {
    localStorage.setItem(key, JSON.stringify(value));
    // st[key] = JSON.stringify(value);
  },
  get(key: string) {
    if (!localStorage.getItem(key)) return null;
    const value = localStorage.getItem(key);
    try {
      const parsed = JSON.parse(value || '');
      return parsed;
    } catch (e) {
      return value;
    }
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
  clear() {
    if (localStorage.clear) {
      localStorage.clear();
    }
  },
};

/**
 * NOTE: 스트링 "true"나 true 로 들어온 값을 불리언으로 변환해 비교해줍니다.
 * @param {boolean, string} string
 */
export function stringBoolean(string: string) {
  let value = null;
  if (typeof string === 'string') {
    value = string.toLowerCase().trim();
  } else {
    value = string;
  }
  switch (value) {
    case 'true':
    case 'yes':
    case '1':
      return true;
    case 'false':
    case 'no':
    case '0':
    case null:
      return false;
    default:
      return Boolean(string);
  }
}
