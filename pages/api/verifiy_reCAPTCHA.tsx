import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY; // Reemplaza con tu clave secreta de reCAPTCHA

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Token de reCAPTCHA faltante" });
  }

  try {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: SECRET_KEY,
          response: token,
        },
      }
    );

    if (response.data.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ success: false, message: "Validación fallida" });
    }
  } catch (error) {
    console.error("Error al verificar reCAPTCHA:", error);
    return res.status(500).json({ success: false, message: "Error interno del servidor" });
  }
}
