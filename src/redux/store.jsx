import { configureStore } from '@reduxjs/toolkit' 
import cartSlice from './cartSlice'
import orderReducer from './order/orderSlice';
import userReducer from './user/userSlice';

export const store = configureStore({
  reducer: {
    cart : cartSlice,
    order: orderReducer,
    user: userReducer,

  },
  devTools : true
})