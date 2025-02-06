// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/libs/db';

// GET - Todos los productos
export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return NextResponse.json(
      { error: 'Error obteniendo productos' },
      { status: 500 }
    );
  }
}

// POST - Crear un producto
export async function POST(request: NextRequest) {
  try {
    const { name, description, price, stock, imageUrl } = await request.json();

    // Validaciones básicas de ejemplo (opcional)
    if (!name || !description || !price || !stock) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price: Number(price),
        stock: Number(stock),
        imageUrl,
      },
    });

    return NextResponse.json(newProduct);
  } catch (err: any) {
    console.error('Error al crear producto');   // sin el objeto como segundo argumento
    console.log('ERROR DETAILS:', err);         // haz un log separado
    return NextResponse.json({ error: 'Error creando producto' }, { status: 500 });
  }
}


