// @flow
import { alertConstants } from '../constants';
import { AlertAction } from '../actions';

export type AlertState = {
  type: 'success' | 'error',
  message?: string,
};

const initialState: AlertState = {
  type: 'error',
  message: '',
};

export const alert = (
  state: AlertState = initialState,
  action: AlertAction,
): AlertState => {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'success',
        message: action.message,
      };
    case alertConstants.ERROR:
      return {
        type: 'error',
        message: action.message,
      };
    case alertConstants.CLEAR:
      return state;
    default:
      return state;
  }
};
