import express from 'express';
import cors from 'cors';
import appointmentRoutes from './routes/appointmentRoutes';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/appointments', appointmentRoutes);

app.get('/', (req, res) => {
  res.send('National Hospital Backend API is running...');
});

export default app;