// ordersSelectors.js
import { createSelector } from '@reduxjs/toolkit';

const selectOrders = state => state.courses;

export const selectAllUsers = createSelector(
    selectOrders,
  orders => orders
);