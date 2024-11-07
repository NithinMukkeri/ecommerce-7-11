// src/hooks/useProducts.js
import { useState, useEffect } from 'react';

const useProducts = (initialFilters = {}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const applyFilters = (filterCriteria) => {
    const filtered = products.filter((product) => {
      const matchesCategory = !filterCriteria.category || product.category === filterCriteria.category;
      const matchesMinPrice = !filterCriteria.minPrice || product.price >= filterCriteria.minPrice;
      const matchesMaxPrice = !filterCriteria.maxPrice || product.price <= filterCriteria.maxPrice;
      return matchesCategory && matchesMinPrice && matchesMaxPrice;
    });
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    fetch('https://example.com/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Start with all products
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return { products: filteredProducts, applyFilters };
};

export default useProducts;
