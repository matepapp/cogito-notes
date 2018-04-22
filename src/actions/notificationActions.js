// @flow
import { notificationConstants } from '../constants';

export type NotificationAction =
  | { type: 'NOTIFICATION_SUCCESS', message: string }
  | { type: 'NOTIFICATION_ERROR', message: string }
  | { type: 'NOTIFICATION_CLEAR' };

const success = (message: string): NotificationAction => {
  return { type: notificationConstants.SUCCESS, message };
};

const error = (message: string): NotificationAction => {
  return { type: notificationConstants.ERROR, message };
};

const clear = () => {
  return { type: notificationConstants.CLEAR };
};

export const notificationActions = {
  success,
  error,
  clear,
};
