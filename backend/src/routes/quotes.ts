import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { AuthRequest, QuoteFormData } from '../types/index.js';
import auth from '../middleware/auth.js';

dotenv.config();
const router = express.Router();
const prisma = new PrismaClient();

// Configure nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Request quote
router.post('/',
  [
    body('name').notEmpty().trim(),
    body('email').isEmail().normalizeEmail(),
    body('phone').optional().trim(),
    body('productId').optional(),
    body('serviceId').optional(),
    body('details').notEmpty().trim(),
    body('quantity').optional().isNumeric(),
    body('deadline').optional().isISO8601()
  ],
  async (req: Request<object, object, QuoteFormData>, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Save quote request to database
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const quote = await prisma.quote.create({
        data: req.body
      });

      // Send email notification
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: process.env.QUOTES_EMAIL,
        subject: 'Nouvelle demande de devis',
        text: `
          Nom: ${req.body.name}
          Email: ${req.body.email}
          Téléphone: ${req.body.phone || 'Non fourni'}
          Produit/Service: ${req.body.productId || req.body.serviceId}
          Détails: ${req.body.details}
          Quantité: ${req.body.quantity || 'Non spécifiée'}
          Date limite: ${req.body.deadline || 'Non spécifiée'}
        `
      });

      res.status(201).json({ message: 'Demande de devis envoyée avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error submitting quote request' });
    }
  }
);

// Get quotes (admin only)
router.get('/', auth, async (_req: AuthRequest, res: Response) => {
  try {
    const quotes = await prisma.quote.findMany({
      include: {
        product: true,
        service: true
      }
    });
    res.json(quotes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching quotes' });
  }
});

export default router;