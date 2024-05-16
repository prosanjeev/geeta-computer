// ordersSelectors.js
import { createSelector } from '@reduxjs/toolkit';

const selectUsers = state => state.users;

export const selectAllUsers = createSelector(
    selectUsers,
  users => users
);