
import Banner from 'components/home/Banner';
import ExampleProducts from 'components/home/ExampleProducts/ExampleProducts';

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
      <ExampleProducts />
    </div>
  );
};

export default Home;
