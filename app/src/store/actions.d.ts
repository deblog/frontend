// // NOTE: message
// // NOTE: chat

// export interface Message {
//   user: string;
//   message: string;
//   timestamp: number;
// }

// export const SEND_MESSAGE = 'SEND_MESSAGE';
// export const DELETE_MESSAGE = 'DELETE_MESSAGE';

// interface SendMessageAction {
//   type: typeof SEND_MESSAGE;
//   payload: Message;
// }
// interface DeleteMessageAction {
//   type: typeof DELETE_MESSAGE;
//   meta: {
//     timestamp: number;
//   };
// }
// export type ChatActionTypes = SendMessageAction | DeleteMessageAction;
// export interface ChatState {
//   messages: Message[];
// }

// // NOTE: system
// export interface SystemState {
//   loggedIn: boolean;
//   session: string;
//   userName: string;
// }

// export const UPDATE_SESSION = 'UPDATE_SESSION';

// interface UpdateSessionAction {
//   type: typeof UPDATE_SESSION;
//   payload: SystemState;
// }

// export type SystemActionTypes = UpdateSessionAction;

// // NOTE: base

// export const GET_TODOS = 'GET_TODOS';
// export const INSERT_TODO = 'INSERT_TODO';
// export const UPDATE_TODO = 'UPDATE_TODO';

// export interface Todo {
//   id: number;
//   title: string;
//   checked: false;
// }
// export interface InsertTodo {
//   title: string;
// }
// export interface UpdateTodo {
//   id: number;
//   title: string;
//   checked?: boolean;
// }

// interface GetTodosAction {
//   type: typeof GET_TODOS;
// }

// interface InsertTodosAction {
//   type: typeof INSERT_TODO;
//   payload: InsertTodo;
// }
// interface UpdateTodoAction {
//   type: typeof UPDATE_TODO;
//   payload: UpdateTodo;
// }
// export type TodoActionTypes = GetTodosAction | InsertTodosAction | UpdateTodoAction;

// export interface BaseState {
//   todos: Todo[];
//   count: number;
// }
