const prefix = 'user';

export const SET_IS_AUTHENTICATED = `@${prefix}/SET_IS_AUTHENTICATED`;

export interface SetIsAuthenticated {
  type: typeof SET_IS_AUTHENTICATED;
  payload: boolean;
}

export type UserActionTypes = SetIsAuthenticated;

export interface UserState {
  isAuthenticated: boolean;
}
