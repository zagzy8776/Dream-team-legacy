import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Nodemailer transporter (configure with Gmail later)
let transporter = nodemailer.createTransporter({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.GMAIL_USER, // TODO: set in .env
    pass: process.env.GMAIL_PASS, // App Password
  },
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp
