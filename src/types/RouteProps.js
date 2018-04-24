// @flow
import type { RouterHistory, Location, Match } from 'react-router-dom';

export type RouteProps = {
  match: Match,
  history: RouterHistory,
  location: Location,
};
