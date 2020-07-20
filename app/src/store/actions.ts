import { createAction } from 'redux-actions';

export const GET_TODO = 'base/GET_TODO';
export const INSERT_TODO = 'base/INSERT_TODO';
export const DELETE_TODO = 'base/DELETE_TODO';
export const TOGGLE_TODO = 'base/TOGGLE_TODO';

export const insertTodo = createAction(INSERT_TODO);
export const deleteTodo = createAction(DELETE_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
export const getTodos = createAction(GET_TODO);

// import {
//   Message,
//   SEND_MESSAGE,
//   DELETE_MESSAGE,
//   ChatActionTypes,
//   SystemState,
//   UPDATE_SESSION,
//   SystemActionTypes,
// } from './actions.d';

// // NOTE: message
// export function SendMessage(newMessage: Message): ChatActionTypes {
//   return {
//     type: SEND_MESSAGE,
//     payload: newMessage,
//   };
// }

// export function deleteMessage(timestamp: number): ChatActionTypes {
//   return {
//     type: DELETE_MESSAGE,
//     meta: {
//       timestamp,
//     },
//   };
// }

// // NOTE: system
// export function updateSession(newSession: SystemState): SystemActionTypes {
//   return {
//     type: UPDATE_SESSION,
//     payload: newSession,
//   };
// }
