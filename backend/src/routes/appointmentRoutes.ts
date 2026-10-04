import express from 'express';
import {
  createAppointment,
  getAppointments,
  updateAppointmentStatus,
  deleteAppointment,
} from '../controllers/appointmentController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// Public route - koi bhi patient book kar sakta hai
router.post('/', createAppointment);

// Protected routes - sirf admin (token ke saath)
router.get('/', protect, getAppointments);
router.put('/:id/status', protect, updateAppointmentStatus);
router.delete('/:id', protect, deleteAppointment);

export default router;