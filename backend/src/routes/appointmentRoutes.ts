import express from 'express';
import { createAppointment, getAppointments } from '../controllers/appointmentController';

const router = express.Router();

// POST /api/appointments
router.post('/', createAppointment);

// GET /api/appointments - Get all appointments (Admin)
router.get('/', getAppointments);


export default router;