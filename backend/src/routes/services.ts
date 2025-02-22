import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { body, validationResult } from 'express-validator';
import auth from '../middleware/auth.js';
import { AuthRequest } from '../types/index.js';

const router = express.Router();
const prisma = new PrismaClient();

// Get all services
router.get('/', async (_req: Request, res: Response) => {
  try {
    const services = await prisma.service.findMany({
      include: {
        features: true,
        details: true
      }
    });
    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching services' });
  }
});

// Get service by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const service = await prisma.service.findUnique({
      where: { id: req.params.id },
      include: {
        features: true,
        details: true
      }
    });
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching service' });
  }
});

// Create service (admin only)
router.post('/',
  auth,
  [
    body('title').notEmpty().trim(),
    body('description').notEmpty().trim(),
    body('image').notEmpty().trim()
  ],
  async (req: AuthRequest, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const service = await prisma.service.create({
        data: {
          ...req.body,
          features: {
            create: req.body.features
          },
          details: {
            create: req.body.details
          }
        },
        include: {
          features: true,
          details: true
        }
      });
      res.status(201).json(service);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating service' });
    }
  }
);

// Update service (admin only)
router.put('/:id',
  auth,
  [
    body('title').optional().trim(),
    body('description').optional().trim(),
    body('image').optional().trim()
  ],
  async (req: AuthRequest, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const service = await prisma.service.update({
        where: { id: req.params.id },
        data: req.body,
        include: {
          features: true,
          details: true
        }
      });
      res.json(service);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating service' });
    }
  }
);

// Delete service (admin only)
router.delete('/:id', auth, async (req: AuthRequest, res: Response) => {
  try {
    await prisma.service.delete({
      where: { id: req.params.id }
    });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting service' });
  }
});

export default router;