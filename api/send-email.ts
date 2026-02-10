import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.setHeader('Content-Type', 'application/json');
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed. Please use POST.'
    });
  }

  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('❌ Missing environment variables');
      return res.status(500).json({
        success: false,
        message: 'Server configuration error.'
      });
    }

    const { name, email, phone, reason, message } = req.body || {};

    if (!name || !email || !reason || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format.'
      });
    }

    // ✅ FIXED TRANSPORTER (PORT 587)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // 🔥 IMPORTANT FIX
      },
    });

    await transporter.verify();

    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Reason:</strong> ${reason}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    const mailOptions = {
      from: `"KhetiBharat Contact" <${process.env.EMAIL_USER}>`,
      to: 'rajeswar00012@gmail.com',
      replyTo: email,
      subject: `New Contact: ${reason} - ${name}`,
      html: htmlContent,
    };

    console.log('📧 Sending email...');
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully');

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully!'
    });

  } catch (error) {
    console.error('❌ Email error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email.'
    });
  }
}
