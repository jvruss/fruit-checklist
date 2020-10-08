import * as types from './types';

export function setIsAuthenticated(payload: boolean): types.SetIsAuthenticated {
  return {
    type: types.SET_IS_AUTHENTICATED,
    payload,
  };
}
