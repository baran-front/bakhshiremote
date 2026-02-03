"use client";

import { SwiperSlide } from "swiper/react";
import Carousel from "../modules/carousel";
import ProductCard from "../modules/productCard";
import { ProductT } from "@/types/api.types";

function RelatedProductsCarousel({ relatedProducts }: { relatedProducts: ProductT[] }) {
  return (
    <Carousel
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      className="mt-6"
    >
      {relatedProducts.map((product) => (
        <SwiperSlide key={product.id} className="pb-16">
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Carousel>
  )
}

export default RelatedProductsCarousel