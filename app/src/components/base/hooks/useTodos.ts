import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/store/modules';
import { insertTodo, deleteTodo, toggleTodo } from '~/store/modules/base';

export default function useTodos() {
  const dispatch = useDispatch();
  const baseState = useSelector((state: RootState) => state.base);
  // console.log('baseState', baseState);
  const onInsertTodo = useCallback(({ title }) => dispatch(insertTodo({ title })), [dispatch]);
  const onDeleteTodo = useCallback(({ id }) => dispatch(deleteTodo({ id })), [dispatch]);
  const onToggleTodo = useCallback(({ id }) => dispatch(toggleTodo({ id })), [dispatch]);

  return {
    todos: baseState.todos,
    onInsertTodo,
    onDeleteTodo,
    onToggleTodo,
  };
}
