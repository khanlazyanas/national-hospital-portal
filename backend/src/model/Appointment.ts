import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  patientName: string;
  phone: string;
  email: string;
  address: string; // <-- Add kiya
  preferredDate: string;
  service: string;
}

const appointmentSchema = new Schema<IAppointment>(
  {
    patientName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true }, // <-- Add kiya
    preferredDate: { type: String, required: true },
    service: { type: String, required: true },
  },
  { timestamps: true }
);

const Appointment = mongoose.model<IAppointment>('Appointment', appointmentSchema);

export default Appointment;