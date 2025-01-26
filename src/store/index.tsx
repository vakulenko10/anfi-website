import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import productsReducer from './slices/productsSlice';
const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer, 
  },
});

export default store;
