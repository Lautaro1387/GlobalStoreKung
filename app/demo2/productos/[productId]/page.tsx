// app/demo2/productos/[productID]/page.tsx
import prisma from "@/libs/db";
import Image from "next/image";
import AddToCartButton from "../../../components/AddToCartButton";

export default async function ProductDetailPage({ params }: any) {
  const productId = Number(params.productID);

  const product = await prisma.product.findUnique({
    where: { product_id: productId },
  });

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Producto no encontrado</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex justify-center">
        <Image
          src={product.imageUrl || "/img/default.png"}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg object-contain"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
        <p className="text-lg text-gray-600">{product.description}</p>
        <div className="text-4xl font-bold text-green-600">${product.price}</div>
        <div className="text-sm text-gray-500">
          Stock disponible: {product.stock}
        </div>
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 text-lg rounded-lg">
          Comprar ahora
        </button>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
