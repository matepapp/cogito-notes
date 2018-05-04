// @flow
import { NOTIFICATION } from '../constants';
import { type NotificationAction } from '../actions';

export type NotificationState = {
  +type?: 'success' | 'error',
  +message?: string,
};

export const notification = (
  state: NotificationState = {},
  action: NotificationAction,
): NotificationState => {
  switch (action.type) {
    case NOTIFICATION.SUCCESS:
      return { type: 'success', message: action.message };
    case NOTIFICATION.ERROR:
      return { type: 'error', message: action.message };
    case NOTIFICATION.CLEAR:
      return {};
    default:
      return state;
  }
};
