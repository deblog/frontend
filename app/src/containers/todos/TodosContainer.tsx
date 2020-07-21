import React, { FormEvent } from 'react';
import styled from '@emotion/styled';
import cx from 'classnames';
import { useImmer } from 'use-immer';
import { color } from '~/styles/_utils';
import { useCounter, useTodos } from '~/components/base/hooks';
import { increase, decrease, increaseBy } from '~/store/modules/counter';
import { useDispatch } from 'react-redux';
import { withZeroNum } from '~/lib/utils';

interface clicktypes {
  type: string;
  name?: string;
  value?: number;
}
interface changeTypes {
  type: string;
  name?: string;
  value: string;
  event?: object;
}
interface keyupTypes {
  type: string;
  name?: string;
  value?: string;
  event?: object;
}
interface submitTypes {
  type: string;
  name?: string;
  value?: string;
  event?: object;
}

const TodosContainerState = {
  title: 'Todos',
  todoInput: '',
};
const TodosContainer = () => {
  const [values, setValues] = useImmer(TodosContainerState);
  // const counter = useCounter();
  const dispatch = useDispatch();
  const { todos, onInsertTodo, onDeleteTodo, onToggleTodo } = useTodos();

  // NOTE: keyup event
  const handleKeyup = (config: keyupTypes): void => {
    // const { event} } = config;
    // console.log(event);
  };
  // NOTE: change event
  const handleChange = (config: changeTypes): void => {
    const { type, value } = config;
    console.log(config);
    if (type === 'todo') {
      setValues(draft => {
        draft.todoInput = value;
      });
    }
  };
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
    if (type === 'counter') {
      if (name === 'up') {
        console.log('up');
        dispatch(increase());
      }
      if (name === 'down') {
        console.log('down');
        dispatch(decrease());
      }
    }
  };

  // NOTE: submit event
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setValues(draft => {
      draft.todoInput = '';
    });
    onInsertTodo({ title: values.todoInput });
  };

  return (
    <Styled.TodosContainer>
      <h2 className="title">{values.title}</h2>
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

      {/* <Counter onClick={handleClick} count={counter.count} /> */}
    </Styled.TodosContainer>
  );
};

interface onClickProps {
  type: string;
  name: string;
}
interface typeCounterProps {
  onClick?: (val: onClickProps) => void;
  count?: number;
}
const Counter = (props: typeCounterProps) => {
  const { onClick = () => {}, count = 0 } = props;
  return (
    <>
      <h2 className="title">Counter</h2>
      <div>
        <button className="todos__btn" onClick={() => onClick({ type: 'counter', name: 'down' })}>
          -
        </button>
        <span className="count">{withZeroNum(count)}</span>
        <button
          className="todos__btn delete"
          onClick={() => onClick({ type: 'counter', name: 'up' })}
        >
          +
        </button>
      </div>
    </>
  );
};
const Styled = {
  TodosContainer: styled.div`
    .title {
      color: ${color.black_font};
    }
    .count {
      display: inline-block;
      padding: 10px;
      font-weight: bold;
    }
    .todos__input {
      padding: 5px;
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
      &:hover {
        background: #ececec;
      }
      &.checked {
        text-decoration: line-through;
      }
    }
  `,
};

export default TodosContainer;
