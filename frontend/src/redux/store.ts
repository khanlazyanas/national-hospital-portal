import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from './slices/appointmentSlice';

export const store = configureStore({
  reducer: {
    appointment: appointmentReducer,
  },
});

// Typescript ke types
export type RootState = ReturnType<typeof store.getState>; // <-- Yahan fix kiya
export type AppDispatch = typeof store.dispatch;