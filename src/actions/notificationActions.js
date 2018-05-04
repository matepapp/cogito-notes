// @flow
import { NOTIFICATION } from '../constants';
import type { Action } from '../types';

export type NotificationAction = Action & { message?: string };

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
