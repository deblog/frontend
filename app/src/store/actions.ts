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
