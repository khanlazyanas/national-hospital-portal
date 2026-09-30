import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppointmentState {
  patientName: string;
  phone: string;
  email: string;
  address: string;
  preferredDate: string;
  service: string;
}

const initialState: AppointmentState = {
  patientName: "",
  phone: "",
  email: "",
  address: "",
  preferredDate: "",
  service: "",
};

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    updateAppointmentData: (state, action: PayloadAction<Partial<AppointmentState>>) => {
      if (action.payload.patientName !== undefined) state.patientName = action.payload.patientName;
      if (action.payload.phone !== undefined) state.phone = action.payload.phone;
      if (action.payload.email !== undefined) state.email = action.payload.email;
      if (action.payload.address !== undefined) state.address = action.payload.address; // <-- YE MISSING THA
      if (action.payload.preferredDate !== undefined) state.preferredDate = action.payload.preferredDate;
      if (action.payload.service !== undefined) state.service = action.payload.service;
    },
    resetAppointment: (state) => {
      state.patientName = "";
      state.phone = "";
      state.email = "";
      state.address = "";
      state.preferredDate = "";
      state.service = "";
    }
  }
});

export const { updateAppointmentData, resetAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;