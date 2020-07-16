import React from 'react';
import styled from '@emotion/styled';
import { useImmer } from 'use-immer';
import { color } from '~/styles/_utils';

interface clicktypes {
  type: string;
}
interface changeTypes {
  type: string;
  value: string;
}

const TodosContainerState = {
  title: 'Todos',
  input: '',
};
function TodosContainer() {
  const [values, setValues] = useImmer(TodosContainerState);

  const handleChange = (config: changeTypes) => {
    const { type, value } = config;
    if (type === 'input') {
      setValues(draft => {
        draft.input = value;
      });
    }
  };
  const handleClick = (config: clicktypes): void => {
    const { type } = config;
    if (type === 'done') {
      const value = values.input;
      console.log(value);
      setValues(draft => {
        draft.input = '';
      });
      console.log('done!');
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
          onChange={e => handleChange({ type: 'input', value: e.target.value })}
          value={values.input}
        />
        <button className="todos__btn" onClick={() => handleClick({ type: 'done' })}>
          Done
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
    .todos__input {
      padding: 5px;
    }
    .todos__btn {
      cursor: pointer;
      padding: 5px;
    }
  `,
};

export default TodosContainer;
