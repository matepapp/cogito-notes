// @flow
import { alertConstants } from '../constants';
import { type AlertAction } from '../actions';

export type AlertState = {
  type?: string,
  message?: string,
};

const initialState: AlertState = {
  type: 'alert-success',
  message: 'You successfully did something',
};

export const alert = (
  state: AlertState = initialState,
  action: AlertAction,
): AlertState => {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message,
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message,
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state;
  }
};
