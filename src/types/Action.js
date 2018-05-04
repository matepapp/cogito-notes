// @flow
export type Action = { type: string };
export type Dispatch = (action: Action | Promise<Action>) => any;
