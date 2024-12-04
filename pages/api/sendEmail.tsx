import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { name, email, empresa, country, subject } = req.body;

  if (!name || !email || !empresa || !country || !subject) {
    return res.status(400).json({ message: "Faltan campos requeridos" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // Cambia esto según tu proveedor
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Too in hosting
        pass: process.env.EMAIL_PASS, // Too in hosting
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "globalstorekung@gmail.com", // Cambia por tu correo
      subject: `Nuevo mensaje de ${name}`,
      text: `Detalles de contacto:
      Nombre: ${name}
      Email: ${email}
      Empresa: ${empresa}
      País: ${country}
      Asunto: ${subject}`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al enviar el correo" });
  }
};

export default handler;
