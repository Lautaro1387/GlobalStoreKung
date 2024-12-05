import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import nodemailer from "nodemailer"; // Suponiendo que usas nodemailer para enviar correos

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY; // Clave secreta de reCAPTCHA
const EMAIL_USER = process.env.EMAIL_USER; // Tu correo electrónico
const EMAIL_PASS = process.env.EMAIL_PASS; // Contraseña o token de aplicación

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { token, name, email, empresa, country, subject } = req.body;

  // 1. Verificar el token de reCAPTCHA
  if (!token) {
    return res.status(400).json({ success: false, message: "Token de reCAPTCHA faltante" });
  }

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
      return res.status(400).json({
        success: false,
        message: "La validación de reCAPTCHA falló",
        errorCodes: recaptchaResponse.data["error-codes"],
      });
    }
  } catch (error) {
    console.error("Error al verificar reCAPTCHA:", error);
    return res.status(500).json({ success: false, message: "Error al verificar reCAPTCHA" });
  }

  // 2. Enviar el correo después de validar el token
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Cambia esto según tu servicio de correo
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email, // Dirección del usuario
      to: EMAIL_USER, // Tu dirección de correo
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

    return res.status(200).json({ success: true, message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return res.status(500).json({ success: false, message: "Error al enviar el correo" });
  }
}
