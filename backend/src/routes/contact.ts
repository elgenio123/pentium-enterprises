import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { ContactFormData } from '../types/index.js';

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

// Submit contact form
router.post('/',
  [
    body('name').notEmpty().trim(),
    body('email').isEmail().normalizeEmail(),
    body('phone').optional().trim(),
    body('subject').notEmpty().trim(),
    body('message').notEmpty().trim()
  ],
  async (req: Request<object, object, ContactFormData>, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Save contact message to database
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const contact = await prisma.contact.create({
        data: req.body
      });

      // Send email notification
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: process.env.CONTACT_EMAIL,
        subject: `Nouveau message de contact: ${req.body.subject}`,
        text: `
          Nom: ${req.body.name}
          Email: ${req.body.email}
          Téléphone: ${req.body.phone || 'Non fourni'}
          Message: ${req.body.message}
        `
      });

      res.status(201).json({ message: 'Message envoyé avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error submitting contact form' });
    }
  }
);

export default router;