import Product from 'components/common/Product';
import { IProduct } from 'Modal/types';
import React from 'react';



interface IProps{
    products: IProduct[] | null
}

const Products = ({products}: IProps) => {
    console.log('products -->', products)
    return (
        <div>
            {
                products?.map((product: IProduct) => (
                    <Product key={product._id} product={product} />
                ))
            }
        </div>
    );
};

export default Products;