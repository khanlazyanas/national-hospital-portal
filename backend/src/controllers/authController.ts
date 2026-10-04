import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

// @desc    Admin login
// @route   POST /api/auth/login
// @access  Public
export const adminLogin = async (req: Request, res: Response) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ success: false, message: 'Password is required' });
    }

    // Check password against .env
    if (password !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ success: false, message: 'Invalid password' });
    }

    // Generate JWT token (valid for 24 hours)
    const token = jwt.sign(
      { role: 'admin', user: 'dr-jilani' },
      process.env.JWT_SECRET as string,
      { expiresIn: '24h' }
    );

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};