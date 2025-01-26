import React, { useState, useEffect } from 'react';
// import { AuthData } from '../auth/AuthWrapper';
import { deleteProductById, fetchProducts, FormData, Product, updateProduct } from '../../services/productsAPI';
// import './pages/Shop/Shop.css';
import ProductCard from './ProductCard';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Button } from '../ui/button';


const Products: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(true);

  const [localProducts, setLocalProducts] = useState<Product[] | null>(null);

  const fetchProductsData = async () => {
    setLoading(true);
    const productsResponse = await fetchProducts();
    if (productsResponse) {
      setLocalProducts(productsResponse);  
      localStorage.setItem("products", JSON.stringify(productsResponse));
    } else {
      console.error('Failed to fetch products');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

//   useEffect(() => {
//     const savedProducts = localStorage.getItem('products');
//     if (savedProducts) {
//       setLocalProducts(JSON.parse(savedProducts));
//     }
//     setLoading(false);
//   }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className=" w-full relative py-8 pt-[100px]">

      <div className='w-full h-fit'>
        <div className="flex flex-wrap relative">
          {/* {filteredProducts && filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product}  />
          ))} */}
          {localProducts?.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
      <Card className='bg-card-secondary'>
        <CardHeader>card header</CardHeader>
        <CardContent>card content</CardContent>
        <CardFooter>card footer<Button>click me</Button></CardFooter>
      </Card>
     
    </div>
  );
};

export default Products;
