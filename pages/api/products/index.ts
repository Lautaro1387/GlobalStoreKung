import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Obtener todos los productos
    const products = await prisma.product.findMany();
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
    // Crear un nuevo producto
    const { name, description, price, stock, imageUrl } = req.body;
    try {
      const product = await prisma.product.create({
        data: { name, description, price, stock, imageUrl },
      });
      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json({ error: "Error al crear producto" });
    }
  }

  if (req.method === "PUT") {
    // Editar un producto existente
    const { id, name, description, price, stock, imageUrl } = req.body;
    try {
      const product = await prisma.product.update({
        where: { product_id: Number(id)  },
        data: { name, description, price, stock, imageUrl },
      });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error: "Error al actualizar producto" });
    }
  }

  if (req.method === "DELETE") {
    // Eliminar un producto
    const { id } = req.query;
    try {
      await prisma.product.delete({ where: { product_id: Number(id) } });
      return res.status(204).end();
    } catch (error) {
      return res.status(400).json({ error: "Error al eliminar producto" });
    }
  }

  res.status(405).json({ message: "Método no permitido" });
}
