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

export const selectedUserInfo = createSelector(
    (state) => state.user.userInfo,
    v => v,
)

export const selectedUserBalance = createSelector(
    (state) => state.user.userBalance,
    v => v,
)

export const selectedUserTransaction = createSelector(
    (state) => state.user.userTransaction,
    v => v,
)