"use cilent"
import { ProductType } from "./types"
import Link from "next/link"
import Image from "next/image"

const ProductCard = ({product}:{product:ProductType}) => {
    {/* IMAGE */}
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
        <Link href={`/product/${product.id}`}>
            <div className="relative aspect-[2/3]">
                <Image 
                   src={product.images[product.colors[0]]} 
                   alt={product.name} 
                   fill 
                   className="object-cover hover:scale-105 transition-all duration-300"
                />
            </div>
        </Link>  
        {/* PRODUCT DETAIL */}
        <div className="flex flex-col gap-4 p-4">
            <h1 className="font-medium">{product.name}</h1>
            <p className="text-sm text-gray-500">{product.shortDescription}</p>
            {/* PRODUCT TYPES */}
            <div className="flex items-center gap-4 text-xs">
                {/* SIZES */}
                <div className="flex flex-col gap-1">
                    <span className="text-gray-500">Size</span>
                    <select name="size" id="size">
                        {product.sizes.map(size=>(
                            <option value={size}>{size}</option>
                        ))}
                    </select>
                </div>
                {/* COLOURS */}
                <div className=""></div>
            </div> 
        </div>
    </div>   
  ) 
}
export default ProductCard 