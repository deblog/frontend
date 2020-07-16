// NOTE: message
export interface Message {
  user: string;
  message: string;
  timestamp: number;
}

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
}
interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE;
  meta: {
    timestamp: number;
  };
}
export type ChatActionTypes = SendMessageAction | DeleteMessageAction;

// NOTE: system
export interface SystemState {
  loggedIn: boolean;
  session: string;
  userName: string;
}

export const UPDATE_SESSION = 'UPDATE_SESSION';

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: SystemState;
}

export type SystemActionTypes = UpdateSessionAction;

// NOTE: chat
export interface ChatState {
  messages: Message[];
}
