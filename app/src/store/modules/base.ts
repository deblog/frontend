import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
const GET_TODO = 'base/GET_TODO';
const INSERT_TODO = 'base/INSERT_TODO';
const DELETE_TODO = 'base/DELETE_TODO';
const TOGGLE_TODO = 'base/TOGGLE_TODO';

export const insertTodo = createAction(INSERT_TODO);
export const deleteTodo = createAction(DELETE_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
export const getTodos = createAction(GET_TODO);

type BaseAction =
  | ReturnType<typeof getTodos>
  | ReturnType<typeof insertTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof toggleTodo>;

export interface Todo {
  id: number;
  title?: string;
  toggle: boolean;
}
export interface BaseState {
  todos: Todo[];
}

const intialState: BaseState = {
  todos: [
    {
      id: 0,
      title: '투두리스트 만들기',
      toggle: false,
    },
    { id: 1, title: '투두리스트 만들기', toggle: false },
  ],
};

// export default handleActions<BaseState, BaseAction>(
//   {
//     [INSERT_TODO]:(state)=>{

//     }
//   },
//   intialState
// )

export default function baseReducer(state: BaseState = intialState, action: BaseAction) {
  // console.log(action, 'action');
  switch (action.type) {
    case GET_TODO:
      return { todos: state.todos };

    case INSERT_TODO:
      return {
        todos: state.todos.concat({
          id: state.todos.length,
          title: action.payload.title,
          toggle: false,
        }),
      };
    case DELETE_TODO:
      const DELETE_TODO_diff = action.payload;
      return produce(state, draft => {
        const newTodos = state.todos.filter(item => item.id !== DELETE_TODO_diff.id);
        draft.todos = newTodos;
      });

    case TOGGLE_TODO:
      const diff = action.payload;
      return produce(state, draft => {
        draft.todos.map(item => {
          if (item.id === diff.id) {
            item.toggle = !item.toggle;
          }
        });
      });
    default:
      return state;
  }
}

// export default baseReducer;

// import { BaseState, TodoActionTypes, GET_TODOS, INSERT_TODO, UPDATE_TODO } from '~/store/actions.d';

// const initialState: BaseState = {
//   todos: [],
//   count: 0,
// };

// export function baseReducer(state = initialState, action: TodoActionTypes) {
//   switch (action.type) {
//     case GET_TODOS: {
//       return {
//         todos: [...state.todos],
//       };
//     }
//     case INSERT_TODO: {
//       return {
//         todos: [],
//       };
//     }
//     case UPDATE_TODO: {
//       return {
//         todos: [],
//       };
//     }
//     default:
//       return state;
//   }
// }
// export const getTodos = () => ({ type: GET_TODO });
// export const insertTodo = (diff: typeIntertTodo) => ({ type: INSERT_TODO, payload: diff });
// export const deleteTodo = (diff: typeDeleteTodo) => ({ type: DELETE_TODO, payload: diff });
// export const toggleTodo = (diff: typeToggleTodo) => ({ type: TOGGLE_TODO, payload: diff });
