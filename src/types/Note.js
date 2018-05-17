// @flow

export type Note = {
  +id: string,
  +url: string,
  +created: string,
  +is_shared: boolean,
  +ownerID: string,
  +title: string,
  +editor: ?string,
  +text: string,
  +summary: string,
};
