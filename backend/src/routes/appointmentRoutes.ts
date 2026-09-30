import express from 'express';
import { createAppointment } from '../controllers/appointmentController';

const router = express.Router();

// POST /api/appointments
router.post('/', createAppointment);

export default router;