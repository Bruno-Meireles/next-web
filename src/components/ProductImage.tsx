"use client";

import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
  product: ProductType;
  fill?: boolean;
};
export default function ProductImage({ product, fill }: ProductImageProps) {
  const [loading, setLoading] = useState(true);
  return fill ? (
    <Image
      src={product.image}
      fill={true}
      alt={product.title}
      className={`object-cover ${
        loading ? "grayscale blur-2xl" : "grayscale-0 blur-0"
      }`}
      onLoad={() => setLoading(false)}
    />
  ) : (
    <Image
      src={product.image}
      width={400}
      height={700}
      fill={true}
      alt={product.title}
      className={`object-cover ${
        loading ? "grayscale blur-2xl" : "grayscale-0 blur-0"
      }`}
      onLoad={() => setLoading(false)}
    />
  );
}
