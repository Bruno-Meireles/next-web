import { ProductType } from "@/types/ProductType";
import ProductImage from "./ProductImage";

type ProductProps = {
  product: ProductType;
};
export default function Product({ product }: ProductProps) {
  return (
    <div className="flex flex-col shadow-lg h-96 bg-slate-800 pt-5 p-5 text-gray-300 ">
      <div className="relative max-h-72 flex-1">
        <ProductImage product={product} fill />
      </div>
      <div className="flex justify-between font-bold my-3">
        <p className="w-40 truncate">{product.title}</p>
      </div>
      <p className="text-md text-teal-300 py-2">{ product.price}</p>
      <button className="bg-teal-600 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded text-sm p-5 text-center">
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
