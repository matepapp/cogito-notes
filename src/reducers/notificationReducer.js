// @flow
import { notificationConstants } from '../constants';
import { type NotificationAction } from '../actions';

export type NotificationState = {
  type?: 'success' | 'error',
  message?: string,
};

export const notification = (
  state: NotificationState = {},
  action: NotificationAction,
): NotificationState => {
  switch (action.type) {
    case notificationConstants.SUCCESS:
      return { type: 'success', message: action.message };
    case notificationConstants.ERROR:
      return { type: 'error', message: action.message };
    case notificationConstants.CLEAR:
      return {};
    default:
      return state;
  }
};
