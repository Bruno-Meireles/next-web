import Product from "@/components/Product";
import { ProductType } from "@/types/ProductType";

export default async function Home() {
  const data = await fetch("https:fakestoreapi.com/products");
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }
  const products = await data.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6 pt-6 ">
      {products.map((product: ProductType) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
}
