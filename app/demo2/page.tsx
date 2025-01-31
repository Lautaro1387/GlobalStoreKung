// /app/demo2/page.tsx
import React from "react";
import Cart from "../components/Cart";
import ProductPage from "@components/ProductPage";
import NavBar from "@components/NavBar";


const Demo2Page: React.FC = () => {
  return (
    <>
    <NavBar></NavBar>
    <div className="min-h-screen bg-gray-100 py-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Bienvenido a mi E-commerce
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          ¡Compra tus productos favoritos desde la comodidad de tu hogar!
        </p>
      </header>
      <main className="container mx-auto px-4 space-y-10">

        {/* Sección del Carrito */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Carrito de Compras
          </h2>
          <Cart />
        </section>
        <ProductPage/>
      </main>
    </div>
    </>
  );
};

export default Demo2Page;
