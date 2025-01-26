import { Product } from "@/services/productsAPI";
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, CartItem, removeItemFromCart, updateItemQuantity } from "@/store/slices/cartSlice";
// import { RootState } from "@/store"; // Adjust import based on where your root state is defined

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items); // Access the cart items from Redux state

  // Check if the product is already in the cart
  const existingItem = cartItems.find((item:CartItem) => item.product_id === product.id);

  const handleAddToCart = () => {
    const newItem = {
      product_id: product.id,
      price: product.price,
      quantity: 1,
      suma: product.price, // initial suma (price * quantity)
    };
    dispatch(addItemToCart(newItem)); // Dispatch action to add item to cart
  };

  const handleRemoveFromCart = () => {
    if (existingItem) {
      dispatch(removeItemFromCart(product.id)); // Dispatch action to remove item from cart
    }
  };
  const handleUpdateItemQuantity = (quantity:number) => {
    if (existingItem) {
      dispatch(updateItemQuantity({product_id: product.id, quantity})); // Dispatch action to remove item from cart
    }
  };

  return (
    <Card
      className={`${
        product.id % 2 === 0 ? "bg-card" : "bg-card-secondary"
      } min-w-[170px] md:min-w-[350px] max-w-xs mx-auto shadow-none rounded-xl transition group min-h-[200px] md:min-h-[400px] relative overflow-hidden`}
    >
      {/* Card Header - Product Image */}
      <CardHeader className="relative">
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

      {/* Card Footer - Action Buttons */}
      <CardFooter className="flex justify-between items-center p-4">
        <Button onClick={handleAddToCart} disabled={!!existingItem}>
          {existingItem ? "Added to Cart" : "Add to Cart"}
        </Button>

        {existingItem && (
          <Button onClick={handleRemoveFromCart}>
            Remove from Cart
          </Button>
        )}
         {existingItem && (
          <>
          <Button onClick={()=>handleUpdateItemQuantity(1)}>
            +
          </Button>
          <Button onClick={()=>handleUpdateItemQuantity(-1)}>
          -
        </Button>
        </>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
