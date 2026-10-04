import express from 'express';
import { adminLogin } from '../controllers/authController';

const router = express.Router();

// POST /api/auth/login
router.post('/login', adminLogin);

export default router;