// @flow
export type Action = { type: string };
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>,
) => any;
