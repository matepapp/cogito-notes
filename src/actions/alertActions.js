// @flow
import { alertConstants } from '../constants';

export type AlertAction =
  | { type: 'ALERT_SUCCESS', message: string }
  | { type: 'ALERT_ERROR', message: string }
  | { type: 'ALERT_CLEAR' };

const success = (message: string): AlertAction => {
  return { type: alertConstants.SUCCESS, message };
};

const error = (message: string): AlertAction => {
  return { type: alertConstants.ERROR, message };
};

const clear = (): AlertAction => {
  return { type: alertConstants.CLEAR };
};

export const alertActions = {
  success,
  error,
  clear,
};
