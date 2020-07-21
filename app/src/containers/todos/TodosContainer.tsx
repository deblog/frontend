import React from 'react';
import { TodoInsert, TodoList } from '~/components/common/todos';

const TodosContainer = () => {
  return (
    <div>
      <h2 className="title">Todos</h2>
      <TodoInsert />
      <TodoList />
    </div>
  );
};

export default TodosContainer;
