import * as types from './types';

const initialState: types.UserState = { isAuthenticated: false };

const userReducer = (state = initialState, action: types.UserActionTypes): types.UserState => {
  switch (action.type) {
    case types.SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
