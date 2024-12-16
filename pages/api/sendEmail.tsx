import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import nodemailer from "nodemailer";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const EMAIL_SENDER = process.env.EMAIL_USER; // Correo verificado en Brevo
const EMAIL_PASS = process.env.EMAIL_PASS
const EMAIL_RECEIVER = process.env.EMAIL_RECEIVER; // Correo personal

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { token, name, email, empresa, country, subject } = req.body;

  // Validación de campos requeridos
  if (!token || !name || !email || !empresa || !country || !subject) {
    return res.status(400).json({ message: "Faltan datos en el formulario." });
  }

  // Verificación de reCAPTCHA
  try {
    const recaptchaResponse = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: RECAPTCHA_SECRET_KEY,
          response: token,
        },
      }
    );

    if (!recaptchaResponse.data.success) {
      return res.status(400).json({ message: "La validación de reCAPTCHA falló." });
    }
  } catch (error) {
    console.error("Error al verificar reCAPTCHA:", error);
    return res.status(500).json({ message: "Error al verificar reCAPTCHA." });
  }

  // Configuración del correo usando Brevo SMTP
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: EMAIL_SENDER,
        pass: EMAIL_PASS, // Clave de API de Brevo
      },
    });

    const mailOptions = {
      from: `Global Store Kung <${EMAIL_SENDER}>`,
      to: EMAIL_RECEIVER,
      subject: `Nuevo mensaje de ${name} (${empresa})`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Empresa: ${empresa}
        País: ${country}
        Mensaje: ${subject}
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Correo enviado correctamente." });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return res.status(500).json({ message: "Error al enviar el correo." });
  }
}
