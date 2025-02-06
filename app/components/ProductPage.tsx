// app/components/ProductPage.tsx
"use client";
import React from "react";
import Products from "./Products";

type Product = {
  product_id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
};

interface ProductPageProps {
  products: Product[];
}

const ProductPage: React.FC<ProductPageProps> = ({ products }) => {
  return (
    <div>
      <h1 className="flex justify-center items-center p-10 text-5xl font-serif">
        Nuestros Productos
      </h1>
      <Products products={products} />
    </div>
  );
};

export default ProductPage;
