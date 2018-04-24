// @flow

export type Note = {
  id: string,
  url: string,
  created: string,
  owner: string,
  title: string,
  text: string,
  isEdited: boolean,
};

export const noteFromApiResponse = (apiResponse: Object): Note => {
  const { id, url, created, owner, is_edited, title, text } = apiResponse;
  return { id, url, created, owner, isEdited: is_edited, title, text };
};
