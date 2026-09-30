import { Request, Response } from 'express';
import Appointment from '../model/Appointment';

// @desc    Create a new appointment
// @route   POST /api/appointments
// @access  Public
export const createAppointment = async (req: Request, res: Response) => {
  try {
    const { patientName, phone, email, address, preferredDate, service } = req.body; // <-- address add karo

    // Validation
    if (!patientName || !phone || !email || !address || !preferredDate || !service) { // <-- address check karo
      return res.status(400).json({ message: 'Please fill all fields' });
    }

    const appointment = await Appointment.create({
      patientName,
      phone,
      email,
      address, // <-- address pass karo
      preferredDate,
      service,
    });

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully',
      data: appointment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};