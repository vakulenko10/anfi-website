import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/AuthSlice'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer, 
    cart: cartReducer, 
    user: authReducer
  },
});
export type AppDispatch = typeof store.dispatch; // Export the dispatch type
export default store;
