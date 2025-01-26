import { Product } from '@/services/productsAPI';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
  items: Product[],
}

const initialState: ProductsState = {
  items: JSON.parse(localStorage.getItem('products') || '[]') as Product[],
};

const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFetchedProducts: (state, action: PayloadAction<Product[]>) =>{
        state.items = action.payload;
        localStorage.setItem('products', JSON.stringify(action.payload))
        console.log('I am inside products slice')
    }
  },
});

export const { setFetchedProducts} = ProductsSlice.actions;

export default ProductsSlice.reducer;
