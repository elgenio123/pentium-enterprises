import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { body, validationResult } from 'express-validator';
import auth from '../middleware/auth.js';
import { AuthRequest } from '../types/index.js';

const router = express.Router();
const prisma = new PrismaClient();

// Get all products
router.get('/', async (_req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching products' });
  }
});

// Get product by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: req.params.id }
    });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching product' });
  }
});

// Create product (admin only)
router.post('/',
  auth,
  [
    body('name').notEmpty().trim(),
    body('description').notEmpty().trim(),
    body('specifications').notEmpty().trim(),
    body('applications').notEmpty().trim(),
    body('image').notEmpty().trim()
  ],
  async (req: AuthRequest, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const product = await prisma.product.create({
        data: req.body
      });
      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating product' });
    }
  }
);

// Update product (admin only)
router.put('/:id',
  auth,
  [
    body('name').optional().trim(),
    body('description').optional().trim(),
    body('specifications').optional().trim(),
    body('applications').optional().trim(),
    body('image').optional().trim()
  ],
  async (req: AuthRequest, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const product = await prisma.product.update({
        where: { id: req.params.id },
        data: req.body
      });
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating product' });
    }
  }
);

// Delete product (admin only)
router.delete('/:id', auth, async (req: AuthRequest, res: Response) => {
  try {
    await prisma.product.delete({
      where: { id: req.params.id }
    });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting product' });
  }
});

export default router;