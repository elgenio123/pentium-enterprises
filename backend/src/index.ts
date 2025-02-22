import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import productsRouter from './routes/products.js';
import servicesRouter from './routes/services.js';
import contactRouter from './routes/contact.js';
import quotesRouter from './routes/quotes.js';
import authRouter from './routes/auth.js';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productsRouter);
app.use('/api/services', servicesRouter);
app.use('/api/contact', contactRouter);
app.use('/api/quotes', quotesRouter);
app.use('/api/auth', authRouter);

// Error handling middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Handle cleanup on shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received. Closing Prisma Client.');
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('SIGINT received. Closing Prisma Client.');
  await prisma.$disconnect();
  process.exit(0);
});