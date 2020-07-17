import { useSelector } from 'react-redux';
import { RootState } from '~/store/modules';

export default function useCounter() {
  const counterState = useSelector((state: RootState) => state.counter);
  console.log('?', counterState);
  return counterState;
}
