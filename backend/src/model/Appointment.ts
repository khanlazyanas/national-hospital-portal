import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  patientName: string;
  phone: string;
  email: string;
  address: string; // <-- Add kiya
  preferredDate: string;
  service: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

const appointmentSchema = new Schema<IAppointment>(
  {
    patientName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true }, // <-- Add kiya
    preferredDate: { type: String, required: true },
    service: { type: String, required: true },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model<IAppointment>('Appointment', appointmentSchema);

export default Appointment;