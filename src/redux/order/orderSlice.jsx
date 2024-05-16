import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(order => order.id !== action.payload);
    },
  },
});

export const { setOrders, setLoading, setError, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;

