// app/api/products/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db";

/**
 * GET - Obtener producto por ID
 */
export async function GET(request: NextRequest) {
  try {
    // 1. Extraemos el pathname, p.ej: "/api/products/123"
    const path = request.nextUrl.pathname;
    // 2. Dividimos por "/" y tomamos la última parte, p.ej: "123"
    const segments = path.split("/");
    const id = segments[segments.length - 1]; 

    // Convertimos a número
    const productId = Number(id);

    // 3. Buscamos el producto
    const product = await prisma.product.findUnique({
      where: { product_id: productId },
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
export async function PATCH(request: NextRequest) {
  try {
    const path = request.nextUrl.pathname;
    const segments = path.split("/");
    const id = segments[segments.length - 1]; 
    const productId = Number(id);

    // Obtenemos el body
    const { name, description, price, stock, imageUrl } = await request.json();

    const updatedProduct = await prisma.product.update({
      where: { product_id: productId },
      data: { name, description, price, stock, imageUrl },
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
export async function DELETE(request: NextRequest) {
  try {
    const path = request.nextUrl.pathname;
    const segments = path.split("/");
    const id = segments[segments.length - 1]; 
    const productId = Number(id);

    await prisma.product.delete({
      where: { product_id: productId },
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
