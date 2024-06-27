import React from "react";
import Image from "next/image";
import Link from "next/link";


type Product = {
    imageUrl: string,
    imageName: string,
    nameProduct: string,
    description: string,
    cost: number,
}

const Products: React.FC<{ products: Product[] }> = ({ products }) => {
    return (
        <>
            <div className="flex flex-wrap justify-center items-center p-10 px-60">
                {products.map((product, index) => (
                    <div key={index} className="w-1/4 p-1 pb-1 mb-4 md:w-1/3">
                        <Link href="/product_info">
                        <div className="border-2 border-gray-500 rounded-lg hover:border-gray-900 transition duration-300">
                            <Image  src={product.imageUrl} alt={product.imageName} width={250} height={100}></Image>
                            <h3 className="px-2 py-1">{product.nameProduct}</h3>
                            <div>
                                <h4 className="px-2 pb-1">$ {product.cost} </h4>                           
                            </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        `
        </>
    )

}
export default Products