import { combineReducers } from 'redux';

// Reducers
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
