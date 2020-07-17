import React from 'react';
import styled from '@emotion/styled';
import { useImmer } from 'use-immer';
import { color } from '~/styles/_utils';
import { useCounter } from '~/components/base/hooks';
import { increase, decrease, increaseBy } from '~/store/modules/counter';
import { useDispatch } from 'react-redux';
import { withZeroNum } from '~/lib/utils';

// import { useTodos } from '~/components/base/hooks';

interface clicktypes {
  type: string;
  name?: string;
}
interface changeTypes {
  type: string;
  value: string;
  name?: string;
}

const TodosContainerState = {
  title: 'Todos',
  todoInput: '',
};
function TodosContainer() {
  const [values, setValues] = useImmer(TodosContainerState);
  const counter = useCounter();
  const dispatch = useDispatch();

  const handleChange = (config: changeTypes) => {
    const { type, value } = config;
    if (type === 'todo') {
      setValues(draft => {
        draft.todoInput = value;
      });
    }
  };
  const handleClick = (config: clicktypes): void => {
    const { type, name } = config;
    if (type === 'todo') {
      const value = values.todoInput;
      console.log(value);
      setValues(draft => {
        draft.todoInput = '';
      });
      console.log('done!');
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

  console.log(values);
  return (
    <Styled.TodosContainer>
      <h2 className="title">{values.title}</h2>
      <div>
        <input
          type="text"
          placeholder="Please enter your task."
          className="todos__input"
          onChange={e => handleChange({ type: 'todo', value: e.target.value })}
          value={values.todoInput}
        />
        <button className="todos__btn" onClick={() => handleClick({ type: 'todo', name: 'todos' })}>
          Done
        </button>
      </div>
      <h2 className="title">Counter</h2>
      <div>
        <button
          className="todos__btn"
          onClick={() => handleClick({ type: 'counter', name: 'down' })}
        >
          -
        </button>
        <span className="count">{withZeroNum(counter.count)}</span>
        <button className="todos__btn" onClick={() => handleClick({ type: 'counter', name: 'up' })}>
          +
        </button>
      </div>
    </Styled.TodosContainer>
  );
}
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
      cursor: pointer;
      padding: 5px 10px;
    }
  `,
};

export default TodosContainer;
