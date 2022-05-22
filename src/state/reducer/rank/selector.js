import { createSelector } from 'reselect';

export const selectMatchState = createSelector(
  (state) => state.rank.matchup,
  (v) => v,
);

export const selectRankState = createSelector(
  (state) => state.rank.realRank,
  (v) => v,
);
