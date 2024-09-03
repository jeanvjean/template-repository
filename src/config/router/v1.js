import { Router } from 'express';
import userRoutes from '../../api/routes/route.user';

const api = Router();

api.get('/', (req, res) => {
  res.send({ message: 'Welcome' });
});

api.use('/users', userRoutes);

export default api;
