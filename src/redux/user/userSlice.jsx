import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    getAllUser: [],
    loading: false,
    error: null,
  };

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setGetAllUser(state, action) {
        state.getAllUser = action.payload;
      },
      setLoading(state, action) {
        state.loading = action.payload;
      },
      setError(state, action) {
        state.error = action.payload;
      },
    },
  });
  
  export const { setGetAllUser, setLoading, setError } = userSlice.actions;
  
  export default userSlice.reducer;