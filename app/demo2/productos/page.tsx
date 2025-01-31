"use client"

import { useEffect, useState } from "react";
import { Product } from "@prisma/client"; // O define el tipo manualmente
import ProductForm from "../../components/ProductForm";

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch de productos al cargar la página
    fetch("/api/products")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Productos</h1>

      {/* Formulario para crear/editar productos */}
      <div className="mb-6">
        <ProductForm />
      </div>

      {/* Lista de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.product_id}
            className="border rounded-lg shadow-md p-4"
          >
            <img
              src={product.imageUrl || "https://via.placeholder.com/150"}
              alt={product.name}
              className="w-full h-32 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold">Precio: ${product.price}</p>
            <p
              className={`text-sm ${
                product.stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.stock > 0 ? `Stock: ${product.stock}` : "Agotado"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
