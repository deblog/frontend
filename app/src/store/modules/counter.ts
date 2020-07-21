import { createCustomAction, ActionType, createReducer } from 'typesafe-actions';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createCustomAction(INCREASE);
export const decrease = createCustomAction(DECREASE);
// DEBUG: 여기 해보기
// DEBUG: 여기 해보기
// DEBUG: 여기 해보기
// DEBUG: createCustomAction 이거 알아봐야함..
export const increaseBy = createCustomAction(INCREASE_BY, item => {
  return (item: number) => item;
});

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: (state: any) => ({ count: state.count + 1 }),
  [DECREASE]: (state: any) => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state: any, action: any) => ({ count: state.count + action.payload }),
});
export default counter;
// export default counterReducer;

// export const increaseBy = (diff: number) => ({
//   type: INCREASE_BY,
//   payload: diff,
// });

// type CounterAction =
//   | ReturnType<typeof increase>
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof increaseBy>;

// function counterReducer(state: CounterState = initialState, action: CounterAction) {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 };
//     case DECREASE:
//       return { count: state.count - 1 };
//     case INCREASE_BY:
//       return { count: state.count + action.payload };
//     default:
//       return state;
//   }
// }
