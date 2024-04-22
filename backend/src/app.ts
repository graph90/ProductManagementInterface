import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import productRoutes from './routes/productRoutes';

const app = express();

app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', productRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Product Management Interface');
});

export default app;
