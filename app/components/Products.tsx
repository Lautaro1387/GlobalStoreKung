// app/components/Products.tsx
"use client";
import Link from "next/link";

type Product = {
  product_id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
};

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link href={`/demo2/productos/${product.product_id}`} key={product.product_id}>
          <div className="border p-4 rounded shadow transition transform hover:scale-105 cursor-pointer">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
            <p className="text-green-600 font-semibold">${product.price.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
