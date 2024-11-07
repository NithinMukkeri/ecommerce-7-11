// src/components/ProductList.js
// src/components/ProductList.js
import React from 'react';
import { useDataContext } from '../../context/DataContext';
import ProductItem from '../ProductItem';
import './index.css'

const ProductList = () => {
  const { products, sortOrder } = useDataContext();

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'asc') return a.price - b.price;
    if (sortOrder === 'desc') return b.price - a.price;
    return 0;
  });

  return (
    <ul className="products-list">
{sortedProducts.map(product => (
  <ProductItem key={product.id} product={product} />
))}
</ul>
  );
};

export default ProductList;

