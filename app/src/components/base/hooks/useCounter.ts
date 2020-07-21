import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/store/modules';
import { increase, decrease, increaseBy } from '~/store/modules/counter';

export default function useCounter() {
  const dispatch = useDispatch();
  const counterState = useSelector((state: RootState) => state.counter);

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseBy = useCallback(number => dispatch(increaseBy(number)), [dispatch]);

  return {
    count: counterState.count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
  };
}
