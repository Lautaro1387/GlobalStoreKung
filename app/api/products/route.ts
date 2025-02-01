import prisma from '@/libs/db';
import { NextRequest, NextResponse } from 'next/server';


// POST - Crear un producto
export async function POST(request: NextRequest) {
  try {
    const data = await request.json(); // { name, price, categoryId, ... }
    const newProduct = await prisma.product.create({
      data,
    });
    return NextResponse.json(newProduct);
  } catch (error) {
    return NextResponse.json({ error: 'Error creando producto' }, { status: 500 });
  }
}

// GET - Obtener todos los productos
export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Error obteniendo productos' }, { status: 500 });
  }
}
