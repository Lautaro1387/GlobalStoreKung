import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import nodemailer from "nodemailer";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
console.log("Clave secreta usada:", process.env.RECAPTCHA_SECRET_KEY);

console.log("RECAPTCHA_SECRET_KEY:", RECAPTCHA_SECRET_KEY ? "OK" : "No configurada");
console.log("EMAIL_USER:", EMAIL_USER ? "OK" : "No configurada");
console.log("EMAIL_PASS:", EMAIL_PASS ? "OK" : "No configurada");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Método de la solicitud (sendEmail):", req.method);

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  console.log("Body recibido (sendEmail):", JSON.stringify(req.body, null, 2));

  const { token, name, email, empresa, country, subject } = req.body;

  if (!token || !name || !email || !empresa || !country || !subject) {
    console.error("Datos faltantes o inválidos:", { token, name, email, empresa, country, subject });
    return res.status(400).json({
      success: false,
      message: "Faltan datos en el cuerpo de la solicitud o están mal formateados",
    });
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

    console.log("Respuesta completa de reCAPTCHA (sendEmail):", recaptchaResponse.data);

    if (!recaptchaResponse.data.success) {
      console.error("Error de reCAPTCHA (sendEmail):", recaptchaResponse.data["error-codes"]);
      return res.status(400).json({
        success: false,
        message: "La validación de reCAPTCHA falló",
        errorCodes: recaptchaResponse.data["error-codes"],
      });
    }
  } catch (error: any) {
    console.error("Error al verificar reCAPTCHA (sendEmail):", error.message);
    return res.status(500).json({ success: false, message: "Error al verificar reCAPTCHA" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_USER,
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
  } catch (error: any) {
    console.error("Error al enviar el correo:", error.message);
    return res.status(500).json({ success: false, message: "Error al enviar el correo" });
  }
}
