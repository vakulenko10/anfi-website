import React, { useState, useEffect } from 'react';
// import { AuthData } from '../auth/AuthWrapper';
import { fetchProducts, Product } from '../../services/productsAPI';
// import './pages/Shop/Shop.css';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { setFetchedProducts } from '@/store/slices/productsSlice';


const Products: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products.items);

  const fetchProductsData = async () => {
    setLoading(true);
    const productsResponse = await fetchProducts();
    if (productsResponse) {
      dispatch(setFetchedProducts(productsResponse));  
    } else {
      console.error('Failed to fetch products');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductsData();
  }, []);
  if (loading) return <div>Loading...</div>;

  return (
    <div className=" w-full relative py-8 pt-[100px]">

      <div className='w-full h-fit'>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 justify-between overflow-hidden relative">
          {products?.map((product:Product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Products;
