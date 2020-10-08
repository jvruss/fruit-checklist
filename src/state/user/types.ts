const prefix = 'user';

export const SET_IS_AUTHENTICATED = `@${prefix}/SET_IS_AUTHENTICATED`;

export interface SetIsAuthenticated {
  type: typeof SET_IS_AUTHENTICATED;
  payload: boolean;
}

export type UserActionTypes = SetIsAuthenticated;

//

export type LoginArgs = {
  email: string;
  password: string;
};

export type LoginData = {
  token: string;
  userId: string;
};

export interface UserState {
  isAuthenticated: boolean;
}
