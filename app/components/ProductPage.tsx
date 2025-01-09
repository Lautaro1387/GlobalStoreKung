import React from 'react';
import Products from './Products'; // Ajusta la ruta según sea necesario

const productList = [
    {
        imageUrl: '/img/img_product_1.png',
        imageName: 'Product 1',
        nameProduct: 'Pantalón Skinny',
        description: 'Descripción del Producto 1',
        cost: 50,
    },
    {
        imageUrl: '/img/img_product_2.png',
        imageName: 'Product 2',
        nameProduct: 'Pantalón Skinny',
        description: 'Descripción del Producto 2',
        cost: 80,
    },
    {
        imageUrl: '/img/img_product_3.png',
        imageName: 'Product 2',
        nameProduct: 'Pantalón Skinny',
        description: 'Descripción del Producto 2',
        cost: 80,
    },
    {
        imageUrl: '/img/img_product_4.png',
        imageName: 'Product 2',
        nameProduct: 'Pantalón Skinny',
        description: 'Descripción del Producto 2',
        cost: 80,
    },
    {
        imageUrl: '/img/img_product_1.png',
        imageName: 'Product 2',
        nameProduct: 'Pantalón Skinny',
        description: 'Descripción del Producto 2',
        cost: 80,
    },
    {
        imageUrl: '/img/img_product_2.png',
        imageName: 'Product 2',
        nameProduct: 'Pantalón Skinny',
        description: 'Descripción del Producto 2',
        cost: 80,
    },

    // Agrega más productos según sea necesario
];

const ProductPage = () => {
    return (
        <div>
            <h1 className='flex justify-center items-center p-10 text-5xl font-serif'>Nuestros Productos</h1>
            <Products products={productList} />
        </div>
    );
};

export default ProductPage;
