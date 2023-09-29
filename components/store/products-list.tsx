import { Product } from "@/types";

interface ProductListProps{
    title:string;
    items:Product[];
}
const ProductList = ({title,items}:ProductListProps) => {
  return (
    <div className="space-y-4">
        <h3 className="font-bold text-3xl">
            {title}
        </h3>
    </div>
  )
}

export default ProductList