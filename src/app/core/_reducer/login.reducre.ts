import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../_action/login.action';

export interface AuthState {
  token: string | null;
  error: string | null;
}

export const initialState: AuthState = {
  token: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { token }) => ({ token, error: null })),
  on(AuthActions.loginFailure, (state, { error }) => ({ token: null, error })),
  on(AuthActions.logout, (state) => initialState)
);
