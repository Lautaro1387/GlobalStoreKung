import { NextApiRequest, NextApiResponse } from 'next';

// Handler de la API
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Aquí iría la lógica para verificar el usuario
    if (email === 'test@example.com' && password === '1234') {
      res.status(200).json({ success: true, token: 'your-token' });
    } else {
      res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
};

export default handler;
