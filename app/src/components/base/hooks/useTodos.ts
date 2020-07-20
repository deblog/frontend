import { useSelector } from 'react-redux';
import { RootState } from '~/store/modules';

export default function useTodos() {
  const baseState = useSelector((state: RootState) => state.base);
  // console.log('baseState', baseState);
  return baseState;
}
