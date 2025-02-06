// app/demo2/layout.tsx
"use client";
import { CartProvider } from "../../context/CartContext";
import NavBar from "../components/NavBar";

export default function Demo2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <div className="demo2-layout">
        <NavBar />
        {children}
      </div>
    </CartProvider>
  );
}
