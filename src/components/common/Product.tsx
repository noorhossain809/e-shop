import { IProduct } from 'Modal/types';
import React from 'react';


interface IProps{
    product : IProduct;
}

const Product = ({product}: IProps) => {
    const {name} = product
    return (
        <div className="container mx-auto pt-10">
            <h2>{name}</h2>
        </div>
    );
};

export default Product;