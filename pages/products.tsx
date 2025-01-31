import { useEffect, useState } from "react";
import { Product } from "@prisma/client";
import ProductForm from "../app/components/ProductForm";

export default function ProductsPage() {
  // Tipar el estado con Product[]
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data)); // Asegúrate de tipar los datos recibidos
  }, []);

  const addProduct = async (product: Product) => {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const newProduct: Product = await response.json();
    setProducts([...products, newProduct]);
  };

  const updateProduct = async (product: Product) => {
    const response = await fetch("/api/products", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const updatedProduct: Product = await response.json();
    setProducts(
      products.map((p) =>
        p.product_id === updatedProduct.product_id ? updatedProduct : p
      )
    );
    setEditingProduct(null);
  };

  const deleteProduct = async (id: number) => {
    await fetch(`/api/products?id=${id}`, { method: "DELETE" });
    setProducts(products.filter((p) => p.product_id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Productos</h1>
      <ProductForm
        product={editingProduct}
        onSubmit={editingProduct ? updateProduct : addProduct}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div key={product.product_id} className="border p-4 rounded">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => setEditingProduct(product)}
                className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
              >
                Editar
              </button>
              <button
                onClick={() => deleteProduct(product.product_id)}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
