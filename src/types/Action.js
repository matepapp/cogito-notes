// @flow
export type Action = { type: string };
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (
  action: Action | ThunkAction | Promise<Action> | Array<Action>,
) => any;
