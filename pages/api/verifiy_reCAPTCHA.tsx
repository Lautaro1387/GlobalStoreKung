import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Método de la solicitud (verify_reCAPTCHA):", req.method);

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { token } = req.body;

  console.log("Token recibido (verify_reCAPTCHA):", token);

  if (!token) {
    console.error("Token de reCAPTCHA faltante");
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

    console.log("Respuesta de reCAPTCHA (verify_reCAPTCHA):", response.data);

    if (response.data.success) {
      return res.status(200).json({ success: true });
    } else {
      console.error("Validación fallida (verify_reCAPTCHA):", response.data["error-codes"]);
      return res.status(400).json({
        success: false,
        message: "Validación fallida",
        errorCodes: response.data["error-codes"],
      });
    }
  } catch (error: any) {
    console.error("Error al verificar reCAPTCHA:", error.message);
    return res.status(500).json({ success: false, message: "Error interno del servidor" });
  }
}
