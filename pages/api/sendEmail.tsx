import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import nodemailer from "nodemailer"; // Suponiendo que usas nodemailer para enviar correos

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY; // Clave secreta de reCAPTCHA
console.log("RECAPTCHA_SECRET_KEY:", RECAPTCHA_SECRET_KEY);

const EMAIL_USER = process.env.EMAIL_USER; // Tu correo electrónico
const EMAIL_PASS = process.env.EMAIL_PASS; // Contraseña o token de aplicación

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Body recibido:", req.body);

  // Extrae los datos del cuerpo de la solicitud
  const { token, name, email, empresa, country, subject } = req.body;

  // Verifica que todos los datos requeridos estén presentes
  if (!token || !name || !email || !empresa || !country || !subject) {
    console.error("Datos faltantes:", { token, name, email, empresa, country, subject });
    return res.status(400).json({ success: false, message: "Faltan datos en el cuerpo de la solicitud" });
  }

  // 1. Verificar el token de reCAPTCHA
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
    console.log("reCAPTCHA Response:", recaptchaResponse.data);

    if (!recaptchaResponse.data.success) {
      console.error("Error de reCAPTCHA:", recaptchaResponse.data["error-codes"]);
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
