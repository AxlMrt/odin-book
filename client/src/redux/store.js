import { configureStore } from '@reduxjs/toolkit';
import authSlice from './actions';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
});

export default store;
