import Footer from 'components/common/Footer';
import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
import { IProduct } from 'Modal/types';
import React, { useEffect, useState } from 'react';
import ProductService from 'services/ProductService';

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(()=> {
    ProductService.getProducts().then((res) => setProducts(res))
  }, [])

  return (
    <div>
      <Banner />
      <Products products={products} />
      <Footer />
    </div>
  );
};

export default Home;
