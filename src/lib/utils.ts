// import moment from 'moment';
// import { ENV_MODE_DEV } from 'lib/setting';
import _ from 'lodash';
import { CurrentRef } from '@/types/global.d';

/**
 * NOTE: 매개변수로 들어온 값이 10 이하일때 0을 붙혀줍니다.
 * @param {*} num
 */
export const withZeroNum = (num: number) => (Number(num) < 10 ? `0${num}` : num);

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
