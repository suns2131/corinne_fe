import { createSelector } from "reselect";

export const selectLoginStatus = createSelector(
    (state) => state.user.status,
    v => v,
)