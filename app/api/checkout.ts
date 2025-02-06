// pages/api/checkout.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { cartItems } = req.body; // Se espera un array de { product_id, quantity }

  try {
    await prisma.$transaction(async (tx) => {
      for (const item of cartItems) {
        const product = await tx.product.findUnique({
          where: { product_id: item.product_id },
        });

        if (!product) {
          throw new Error(`Producto con id ${item.product_id} no encontrado`);
        }

        if (product.stock < item.quantity) {
          throw new Error(`Stock insuficiente para el producto ${product.name}`);
        }

        // Actualiza el stock
        await tx.product.update({
          where: { product_id: item.product_id },
          data: { stock: product.stock - item.quantity },
        });
      }

      // Aquí podrías, por ejemplo, crear un registro de "Order" en tu DB
    });

    res.status(200).json({ message: "Compra procesada exitosamente" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
