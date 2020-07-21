import produce from 'immer';
import { createAction, ActionType, createReducer } from 'typesafe-actions';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();

export const increaseBy = createAction(INCREASE_BY, (type:number) => {
  return type
})();

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
  [INCREASE_BY]: (state, action) =>  
    produce(state, draft => {
      draft.count += action.payload
    }),
});


export default counter;






