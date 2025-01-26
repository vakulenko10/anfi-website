import { Product } from "@/services/productsAPI";
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
// import { Card, CardHeader, CardBody, CardFooter, CardTitle, CardDescription } from "@shadcn/ui"; // Import ShadCN components

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className={`${(product.id % 2 == 0 )? 'bg-card' :'bg-card-secondary'} min-w-[170px] md:min-w-[350px] max-w-xs mx-auto shadow-none rounded-xl transition group min-h-[200px] md:min-h-[400px] relative overflow-hidden`}>
      {/* Card Header - Product Image */}
      <CardHeader className="relative ">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center rounded-t-xl group-hover:scale-105 transition-all"
        />
      </CardHeader>

      {/* Card Body - Product Name, Price, and Description */}
      <CardContent className="p-4">
        <CardTitle className="text-text1 font-serif text-xs">{product.name}</CardTitle>
        <div className="flex justify-between items-center">
          <span className="text-text1 font-bold">${product.price}</span>
        </div>
        <CardDescription className="text-text1 text-xs font-serif mt-2">
          Status: {product.status}
        </CardDescription>
      </CardContent>

      {/* Card Footer - Optional Action Buttons */}
      <CardFooter className="flex justify-between items-center p-4">
        {/* You can add buttons like Edit, Add to Cart here */}
        <Button
          onClick={() => {}}
        >
          Add to Cart
        </Button>
        <Button
          onClick={() => {}}
        >
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
