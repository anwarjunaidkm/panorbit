import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './slice/UserSlice';

export default configureStore({
  reducer: {

    user:UserReducer
   
  },
});