import React, { memo } from 'react';
import styled from '@emotion/styled';
import cx from 'classnames';
import { useImmer } from 'use-immer';
import { color } from '~/styles/_utils';
import { useTodos } from '~/components/base/hooks';

interface clicktypes {
  type: string;
  name?: string;
  value?: number;
}
const TodoList = memo(() => {
  const { todos, onDeleteTodo, onToggleTodo } = useTodos();

  // NOTE: click event
  const handleClick = (config: clicktypes): void => {
    const { type, name, value } = config;
    if (type === 'todo') {
      if (name === 'delete') {
        onDeleteTodo({ id: value });
      }
      if (name === 'toggle') {
        onToggleTodo({ id: value });
      }
    }
  };

  return (
    <Styled.TodoList>
      {todos.length === 0 && <div className="todos__nodata">No Data.</div>}
      {todos.map((item, idx) => {
        console.log();
        return (
          <div key={idx} className="todo__item_rows">
            <span
              className={cx('todo__item_tx', { checked: item.toggle })}
              onClick={() => handleClick({ type: 'todo', name: 'toggle', value: item.id })}
            >
              {item.title}
            </span>
            <button
              className="todos__btn delete"
              onClick={() => handleClick({ type: 'todo', name: 'delete', value: item.id })}
            >
              (X)
            </button>
          </div>
        );
      })}
    </Styled.TodoList>
  );
});

const Styled = {
  TodoList: styled.div`
    .todos__nodata {
      color: gray;
      font-size: 14px;
    }
    .todos__btn {
      display: inline-block;
      cursor: pointer;
      padding: 5px 10px;

      &.delete {
        color: red;
        background: white;
        border: 1px solid #ececec;
      }
    }
    .todo__item_tx {
      display: inline-block;
      width: 200px;
      cursor: pointer;
      font-size: 15px;
      &:hover {
        background: #ececec;
      }
      &.checked {
        text-decoration: line-through;
      }
    }
  `,
};

export default TodoList;
