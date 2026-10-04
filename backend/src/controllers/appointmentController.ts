import { Request, Response } from 'express';
import Appointment from '../model/Appointment';
import { sendPatientConfirmation, sendDoctorNotification } from '../utils/emailService';


// @desc    Create a new appointment
// @route   POST /api/appointments
// @access  Public
export const createAppointment = async (req: Request, res: Response) => {
  try {
    const { patientName, phone, email, address, preferredDate, service } = req.body;

    if (!patientName || !phone || !email || !address || !preferredDate || !service) {
      return res.status(400).json({ message: 'Please fill all fields' });
    }

    const appointment = await Appointment.create({
      patientName, phone, email, address, preferredDate, service,
    });

    // Send emails (non-blocking)
    const emailData = { patientName, phone, email, address, preferredDate, service };
    
    Promise.allSettled([
      sendPatientConfirmation(emailData),
      sendDoctorNotification(emailData),
    ]).then((results) => {
      results.forEach((result, idx) => {
        if (result.status === 'rejected') {
          console.error(`Email ${idx === 0 ? 'to patient' : 'to doctor'} failed:`, result.reason);
        }
      });
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


// @desc    Get all appointments
// @route   GET /api/appointments
// @access  Private (Admin)
export const getAppointments = async (req: Request, res: Response) => {
  try {
    // Latest appointment sabse upar aayegi
    const appointments = await Appointment.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};



// @desc    Update appointment status
// @route   PUT /api/appointments/:id/status
export const updateAppointmentStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const validStatuses = ['pending', 'confirmed', 'completed', 'cancelled'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};





// @desc    Delete appointment
// @route   DELETE /api/appointments/:id
export const deleteAppointment = async (req: Request, res: Response) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json({ success: true, message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};