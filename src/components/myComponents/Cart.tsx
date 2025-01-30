import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import Redux hooks
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { CartItem as CartItemType, CartState } from '@/store/slices/cartSlice';
import { UserState } from '@/store/slices/AuthSlice';
import { AppDispatch } from '@/store';
import ProductCard from './ProductCard';
import CartItem  from './CartItem';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: any) => state.cart.items);
  const cartTotal = useSelector((state: any) => state.cart.total);
    console.log("cart items: ", cartItems);

  return (
    <div className="relative overflow-visible">
      {/* Sheet Component to show cart */}
      <Sheet >
        <SheetTrigger className="bg-transparent">
          <Button className="variant fixed transform bottom-0 right-0 m-2">
             Show Cart
          </Button>
        </SheetTrigger>

        <SheetContent className="space-y-4">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
            <SheetDescription>
              Review your items before completing the order.
            </SheetDescription>
          </SheetHeader>
          <h4>total: {cartTotal}$</h4>
          <ScrollArea className='custom-scrollbar w-full relative scroll-area h-3/4 s'>
           
            {cartItems.map((cartItem:CartItemType, index:string)=>{
                return <div key={index}> <CartItem item={cartItem}/></div>
            })}
            <ScrollBar orientation="vertical" className="custom-scrollbar"/>
            </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cart;
