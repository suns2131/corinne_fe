import { createSelector } from "reselect";

export const selectLoginStatus = createSelector(
    (state) => state.user.status,
    v => v,
)

export const selectedUserName = createSelector(
    (state) => state.user.name,
    v => v,
)

export const selectedIsFirstLogin = createSelector(
    (state) => state.user.isFirstLogin,
    v => v,
)