// app/api/products/[id]/route.ts

import { NextResponse } from "next/server";
import prisma from "@/libs/db";

// Definimos un tipo para el contexto que Next nos pasa como segundo argumento
interface RouteContext {
  params: {
    id: string;
  };
}

// GET - Obtener producto por ID
export async function GET(request: Request, { params }: RouteContext) {
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

// PATCH - Actualizar producto por ID
export async function PATCH(request: Request, { params }: RouteContext) {
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

// DELETE - Eliminar producto por ID
export async function DELETE(request: Request, { params }: RouteContext) {
  try {
    await prisma.product.delete({
      where: { product_id: Number(params.id) },
    });
    return NextResponse.json({ message: "Producto eliminado" });
  } catch (err) {
    console.error("Error al eliminar producto:");
    console.log("ERROR DETAILS:", err);
    return NextResponse.json(
      { error: "Error eliminando producto" },
      { status: 500 }
    );
  }
}
