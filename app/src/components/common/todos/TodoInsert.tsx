import React, { memo, FormEvent } from 'react';
import styled from '@emotion/styled';
import cx from 'classnames';
import { useImmer } from 'use-immer';
import { color } from '~/styles/_utils';
import { useTodos } from '~/components/base/hooks';

interface keyupTypes {
  type: string;
  name?: string;
  value?: string;
  event?: object;
}
interface changeTypes {
  type: string;
  name?: string;
  value: string;
  event?: object;
}
const TodosContainerState = {
  todoInput: '',
};
const TodoInsert = memo(() => {
  const [values, setValues] = useImmer(TodosContainerState);
  const { onInsertTodo } = useTodos();
  // NOTE: keyup event
  const handleKeyup = (config: keyupTypes): void => {};
  // NOTE: change event
  const handleChange = (config: changeTypes): void => {
    const { type, value } = config;
    if (type === 'todo') {
      setValues(draft => {
        draft.todoInput = value;
      });
    }
  };

  // NOTE: submit event
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (values.todoInput.trim().length === 0) return;
    setValues(draft => {
      draft.todoInput = '';
    });
    onInsertTodo({ title: values.todoInput });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter your task."
          className="todos__input"
          onChange={e => handleChange({ type: 'todo', name: 'insert', value: e.target.value })}
          value={values.todoInput}
        />
        <button type="submit" className="todos__btn" onClick={handleSubmit}>
          Done
        </button>
      </form>
    </div>
  );
});

export default TodoInsert;
