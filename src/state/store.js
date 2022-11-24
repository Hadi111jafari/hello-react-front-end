import { configureStore } from '@reduxjs/toolkit';
import greeting from './greetingSlice';

const store = configureStore({
  reducer: {
    greeting,
  },
});

export default store;
