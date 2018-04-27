// @flow
import { NOTIFICATION } from '../constants';

export type NotificationAction =
  | { type: 'NOTIFICATION_SUCCESS', message: string }
  | { type: 'NOTIFICATION_ERROR', message: string }
  | { type: 'NOTIFICATION_CLEAR' };

const success = (message: string): NotificationAction => {
  return { type: NOTIFICATION.SUCCESS, message };
};

const error = (message: string): NotificationAction => {
  return { type: NOTIFICATION.ERROR, message };
};

const clear = () => {
  return { type: NOTIFICATION.CLEAR };
};

export const notificationActions = {
  success,
  error,
  clear,
};
