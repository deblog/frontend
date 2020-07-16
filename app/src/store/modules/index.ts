import { combineReducers } from 'redux';
import { chatReducer } from './chat';
import { systemReducer } from './system';
const rootReducer = combineReducers({
  chat: chatReducer,
  system: systemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
