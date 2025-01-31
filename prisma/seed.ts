import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Producto 1",
        description: "Descripción del Producto 1",
        price: 10.99,
        stock: 5,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        name: "Producto 2",
        description: "Descripción del Producto 2",
        price: 15.99,
        stock: 10,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        name: "Producto 3",
        description: "Descripción del Producto 3",
        price: 20.99,
        stock: 3,
        imageUrl: "https://via.placeholder.com/150",
      },
    ],
  });

  console.log("Productos iniciales creados.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
