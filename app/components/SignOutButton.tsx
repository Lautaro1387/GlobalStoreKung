// app/components/SignOutButton.tsx
"use client";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  const handleSignOut = async () => {
    // Llamamos a signOut sin redirección automática
    await signOut({ redirect: false });
    // Una vez finalizado, forzamos la redirección manualmente
    window.location.href = `${window.location.origin}/demo2/auth/login`;
  };

  return (
    <button
      onClick={handleSignOut}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
    >
      Cerrar sesión
    </button>
  );
}
