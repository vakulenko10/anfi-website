import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  price: number;
  product_id: number | string;
  quantity: number;
  suma: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = JSON.parse(localStorage.getItem('cart') || '{"items": [], "total": 0}') as CartState;

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setFetchedCart: (state, action: PayloadAction<CartState>) => {
      state = action.payload;
      localStorage.setItem('cart', JSON.stringify(action.payload));
      console.log('Cart state has been fetched and set');
    },

    // Add item to the cart
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.product_id === action.payload.product_id);
      
      if (existingItem) {
        // If item exists, update quantity and total
        existingItem.quantity += action.payload.quantity;
        existingItem.suma = existingItem.quantity * existingItem.price;
      } else {
        // If item doesn't exist, add it to the cart
        state.items.push(action.payload);
      }

      // Update the total cost of the cart
      state.total = state.items.reduce((total, item) => total + item.suma, 0);

      // Save the updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(state));
    },

    // Remove item from the cart
    removeItemFromCart: (state, action: PayloadAction<number | string>) => {
      state.items = state.items.filter(item => item.product_id !== action.payload);

      // Update the total cost of the cart after removing the item
      state.total = state.items.reduce((total, item) => total + item.suma, 0);

      // Save the updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(state));
    },

    // Update the quantity of an existing item in the cart
    updateItemQuantity: (state, action: PayloadAction<{ product_id: number | string, quantity: number }>) => {
      const item = state.items.find(item => item.product_id === action.payload.product_id);

      if (item) {
        item.quantity += action.payload.quantity;
        item.suma = item.quantity * item.price;

        // Update the total cost of the cart
        state.total = state.items.reduce((total, item) => total + item.suma, 0);

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
  },
});

export const { setFetchedCart, addItemToCart, removeItemFromCart, updateItemQuantity } = CartSlice.actions;

export default CartSlice.reducer;
