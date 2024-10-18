import { Info } from 'lucide-react';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, phone, subject, message } = req.body;

    // Nodemailer yapılandırması
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, // E-posta adresiniz
        pass: process.env.EMAIL_PASSWORD, // E-posta şifreniz
      },
    });

    try {
      // E-posta gönderme işlemi
      const info = await transporter.sendMail({
        from: email,
        to: process.env.EMAIL, // Kendi e-posta adresiniz
        subject: `Yeni iletişim formu mesajı: ${subject}`,
        text: message,
        html: `<p><strong>Ad:</strong> ${firstname} ${lastname}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Telefon:</strong> ${phone}</p>
               <p><strong>Konu:</strong> ${subject}</p>
               <p><strong>Mesaj:</strong> ${message}</p>`,
      });
      console.log("e posta gönderildi", info);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('E-posta gönderim hatası:', error);
      res.status(500).json({ success: false, message: 'E-posta gönderilemedi.' });
    }
  } else {
    res.status(405).json({ message: 'Sadece POST istekleri kabul ediliyor.' });
  }
}
