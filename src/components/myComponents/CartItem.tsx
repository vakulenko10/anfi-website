import { Product } from "@/services/productsAPI";
import { addItemToCart, CartItem, removeItemFromCart, updateItemQuantity } from "@/store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

interface CartItemProps {
    item: CartItem;
}
const ProductCard: React.FC<CartItemProps> = ({ item }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart.items); // Access the cart items from Redux state
    const products = useSelector((state: any) => state.products.items);
    // Check if the product is already in the cart
    const existingItem = cartItems.find((cartItem: CartItem) => cartItem.product_id === item.product_id);
    const product = products.find((p: Product) => p.id == item.product_id)
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
  
    const handleUpdateItemQuantity = (quantity: number) => {
      if (existingItem) {
        dispatch(updateItemQuantity({ product_id: product.id, quantity })); // Dispatch action to remove item from cart
      }
    };
    const handleUpdateItemQuantityNegative = (quantity: number) => {
        if (existingItem ) {
            existingItem.quantity == 0?dispatch(removeItemFromCart(product.id)):
          dispatch(updateItemQuantity({ product_id: product.id, quantity })); // Dispatch action to remove item from cart
        }
        
      };
  
    return (
      <Card
        className={`${
          product.id % 2 === 0 ? "bg-card" : "bg-card-secondary"
        } min-w-[100px] max-w-[300px] mx-auto my-2  rounded-xl border-none transition-transform duration-300 relative overflow-hidden grid grid-rows-[1fr_auto]`}
      >
        {/* Card Header - Product Image */}
        {/* <CardHeader className="relative w-full h-[200px] md:h-[250px] flex-shrink-0">
          
        </CardHeader> */}
  
        {/* Card Body - Product Name, Price, and Description */}
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:items-center relative h-full ">
            <div className="relative min-w-3/4 w-3/4 h-full rounded-xl">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-contain scale-150 object-center transition-all"
              />
            </div>
            <div className="flex flex-col self-start justify-center items-start">
            <CardDescription className="relative text-text1 text-xs font-serif mt-1  flex flex-col">
                <h5 className="font-serif font-bold text-lg m-0 text-start">
                  ${product.price}
                </h5>
                <h5 className="font-serif font-thin text-lg m-0 text-start">
                quantity: {item.quantity}
                </h5>
              </CardDescription>
              <CardTitle className="text-text1 font-serif text-sm md:text-base text-start">
                <h2 className="text-lg text-primary m-0">{product.name}</h2>
              </CardTitle>
              
            </div>
            {/* <div className="flex justify-between items-center mt-2 sm:mt-0">
              <span className="text-text1 font-bold text-lg">${product.price}</span>
            </div> */}
          </div>
        </CardContent>
  
        {/* Card Footer - Action Buttons */}
        <CardFooter className="flex self-end justify-between items-center p-4 ">
        {existingItem ? '' : 
          <Button
            onClick={handleAddToCart}
            disabled={!!existingItem}
            className="w-full sm:w-auto"
          >
            add to cart
          </Button>}
  
          {existingItem && (
            <Button
              onClick={handleRemoveFromCart}
              className="w-full sm:w-auto mt-2 sm:mt-0"
            >
              Remove from Cart
            </Button>
          )}
          {existingItem && (
            <>
              <Button
                onClick={() => handleUpdateItemQuantity(1)}
                className="w-8 sm:w-auto mt-2 sm:mt-0"
              >
                +
              </Button>
              <Button
                onClick={() => handleUpdateItemQuantityNegative(-1)}
                className="w-8 sm:w-auto mt-2 sm:mt-0"
              >
                -
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    );
  };
  
  export default ProductCard;
  