import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 1. Initial State: UI form ke sabhi fields
interface AppointmentState {
  patientName: string;
  phone: string;
  email: string;
  preferredDate: string;
  service: string;
}

const initialState: AppointmentState = {
  patientName: "",
  phone: "",
  email: "",
  preferredDate: "",
  service: "",
};

// 2. Slice Banana
const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    // Form ka naya data lega aur state me save karega
    // Yahan PayloadAction<Partial<AppointmentState>> use kiya hai taaki aap partial data bhej sako
    updateAppointmentData: (state, action: PayloadAction<Partial<AppointmentState>>) => {
      if (action.payload.patientName !== undefined) state.patientName = action.payload.patientName;
      if (action.payload.phone !== undefined) state.phone = action.payload.phone;
      if (action.payload.email !== undefined) state.email = action.payload.email;
      if (action.payload.preferredDate !== undefined) state.preferredDate = action.payload.preferredDate;
      if (action.payload.service !== undefined) state.service = action.payload.service;
    },
    // Form clear karne ke liye
    resetAppointment: (state) => {
      state.patientName = "";
      state.phone = "";
      state.email = "";
      state.preferredDate = "";
      state.service = "";
    }
  }
});

// 3. Actions aur Reducer ko export karna
export const { updateAppointmentData, resetAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;