"use client"

import React from "react";
import NavBar from "../components/NavBar";
import Carousel from "@components/Carousel";
import ProductPage from "@components/ProductPage";
import FooterPage from "@components/Footer";


const images = [
  { src: '/img_coursel_1.png', alt: 'Product 1', width: 1600, height: 50},
  { src: '/img_coursel_2.png', alt: 'Product 2', width: 1600, height: 50},
  { src: '/img_coursel_1.png', alt: 'Product 3', width: 1600, height: 50},
  { src: '/img_coursel_2.png', alt: 'Product 4', width: 1600, height: 50},
  { src: '/img_coursel_1.png', alt: 'Product 5', width: 1600, height: 50},
]

export default function Demo_1() {
  return (
    <>
      <NavBar/>
      <Carousel images={images} carouselWidth={1600}/>
      <ProductPage/>
      <FooterPage/>
    </>
  );
}
