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
// POST - Crear un producto
export async function POST(request: NextRequest) {
  try {
    // Debug: mira qué content-type llega
    const contentType = request.headers.get('content-type');
    console.log('CONTENT-TYPE:', contentType);

    // Lee el body como texto
    const rawBody = await request.text();
    console.log('RAW BODY:', rawBody);

    // Parsea manualmente
    const data = JSON.parse(rawBody);
    console.log('DATA PARSED:', data);

    // Ahora sacas las propiedades
    const { name, description, price, stock, imageUrl } = data;

    // Resto de la lógica...
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
  } catch (error) {
    console.error('Error al crear producto:', error);
    return NextResponse.json({ error: 'Error creando producto' }, { status: 500 });
  }
}

