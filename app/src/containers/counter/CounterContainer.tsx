import React from 'react';
import styled from '@emotion/styled';
import cx from 'classnames';
import { useImmer } from 'use-immer';
import { color } from '~/styles/_utils';
import { useCounter } from '~/components/base/hooks';
import { withZeroNum } from '~/lib/utils';

interface clicktypes {
  type: string;
  name?: string;
  value?: number;
}

const TodosContainerState = {
  title: 'Counter',
  todoInput: '',
};
const CounterContainer = () => {
  const [values, setValues] = useImmer(TodosContainerState);
  const { count, onDecrease, onIncrease, onIncreaseBy } = useCounter();
  // NOTE: click event
  const handleClick = (config: clicktypes): void => {
    const { type, name, value } = config;
    if (type === 'counter') {
      if (name === 'up') {
        console.log('up');
        onIncrease();
      }
      if (name === 'down') {
        console.log('down');
        onDecrease();
      }
      if (name === 'increaseBy') {
        onIncreaseBy(value);
      }
    }
  };

  return (
    <Styled.CounterContainer>
      <h2 className="title">{values.title}</h2>
      <Counter onClick={handleClick} count={count} />
    </Styled.CounterContainer>
  );
};

interface onClickProps {
  type: string;
  name: string;
  value?: number;
}
interface typeCounterProps {
  onClick?: (val: onClickProps) => void;
  count?: number;
}
const Counter = (props: typeCounterProps) => {
  const { onClick = () => {}, count = 0 } = props;
  return (
    <>
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
        <div>
          <button onClick={() => onClick({ type: 'counter', name: 'increaseBy', value: count })}>
            increaseBy
          </button>
        </div>
      </div>
    </>
  );
};
const Styled = {
  CounterContainer: styled.div`
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

export default CounterContainer;
