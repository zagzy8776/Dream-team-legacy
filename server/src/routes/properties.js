import express from 'express';
import { z } from 'zod';
import { prisma } from '../index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Validation schemas
const propertySchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  price: z.number().positive(),
  location: z.string().min(1),
  size: z.number().positive(),
  type: z.string(),
  status: z.enum(['draft', 'published', 'sold']).optional(),
  imageUrl: z.string().url().optional(),
  images: z.string().optional(),
  features: z.string().optional(),
  isHot: z.boolean().optional(),
  isNew: z.boolean().optional(),
  isPremium: z.boolean().optional()
});

// GET all properties (admin only)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const { status, type, search } = req.query;
    
    const where = {};
    if (status) where.status = status;
    if (type) where.type = type;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { location: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ];
    }

    const properties = await prisma.property.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    });

    res.json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});

// GET single property (admin only)
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const property = await prisma.property.findUnique({
      where: { id }
    });

    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    res.json(property);
  } catch (error) {
    console.error('Error fetching property:', error);
    res.status(500).json({ error: 'Failed to fetch property' });
  }
});

// POST create property (admin only)
router.post('/', authenticateToken, async (req, res) => {
  try {
    const data = propertySchema.parse(req.body);
    
    const property = await prisma.property.create({
      data: {
        ...data,
        publishedAt: data.status === 'published' ? new Date() : null
      }
    });

    res.status(201).json(property);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    console.error('Error creating property:', error);
    res.status(500).json({ error: 'Failed to create property' });
  }
});

// PUT update property (admin only)
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const data = propertySchema.partial().parse(req.body);

    // Check if property exists
    const existing = await prisma.property.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: 'Property not found' });
    }

    // Update publishedAt if status changed to published
    if (data.status === 'published' && existing.status !== 'published') {
      data.publishedAt = new Date();
    }

    const property = await prisma.property.update({
      where: { id },
      data
    });

    res.json(property);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    console.error('Error updating property:', error);
    res.status(500).json({ error: 'Failed to update property' });
  }
});

// DELETE property (admin only)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    // Check if property exists
    const existing = await prisma.property.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: 'Property not found' });
    }

    await prisma.property.delete({ where: { id } });
    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    console.error('Error deleting property:', error);
    res.status(500).json({ error: 'Failed to delete property' });
  }
});

// PATCH update property status (admin only)
router.patch('/:id/status', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = z.object({ status: z.enum(['draft', 'published', 'sold']) }).parse(req.body);

    const existing = await prisma.property.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: 'Property not found' });
    }

    const property = await prisma.property.update({
      where: { id },
      data: {
        status,
        publishedAt: status === 'published' ? new Date() : null
      }
    });

    res.json(property);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    console.error('Error updating status:', error);
    res.status(500).json({ error: 'Failed to update status' });
  }
});

export default router;