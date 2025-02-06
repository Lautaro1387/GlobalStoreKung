// app/api/products/[id]/route.ts

import { NextResponse } from "next/server";
import prisma from "@/libs/db";

/**
 * GET - Obtener producto por ID
 */
export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { params } = context; // Extraemos "params" de "context"
  try {
    const product = await prisma.product.findUnique({
      where: { product_id: Number(params.id) },
    });

    if (!product) {
      return NextResponse.json(
        { error: "Producto no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error al obtener producto:", error);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}

/**
 * PATCH - Actualizar producto por ID
 */
export async function PATCH(
  request: Request,
  context: { params: { id: string } }
) {
  const { params } = context;
  try {
    const { name, description, price, stock, imageUrl } = await request.json();

    const updatedProduct = await prisma.product.update({
      where: { product_id: Number(params.id) },
      data: {
        name,
        description,
        price,
        stock,
        imageUrl,
      },
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}

/**
 * DELETE - Eliminar producto por ID
 */
export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  const { params } = context;
  try {
    await prisma.product.delete({
      where: { product_id: Number(params.id) },
    });
    return NextResponse.json({ message: "Producto eliminado" });
  } catch (err) {
    console.error("Error al eliminar producto:", err);
    return NextResponse.json(
      { error: "Error eliminando producto" },
      { status: 500 }
    );
  }
}
