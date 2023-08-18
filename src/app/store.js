import { configureStore } from '@reduxjs/toolkit';
import timelineSlice from '../features/timeline/timelineSlice.js';
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
     timeline : timelineSlice
  },
});
