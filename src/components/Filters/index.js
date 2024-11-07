// src/components/Filters.js
import React from 'react';
import { useDataContext } from '../../context/DataContext';
import './index.css'

const Filters = () => {
  const { sortOrder, setSortOrder } = useDataContext();

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="products-header">
      <h1 className="products-list-heading">All Products</h1>
      <div className="sort-by-container">
        
        <p className="sort-by">Sort by</p>
        <select
          className="sort-by-select"
          value={sortOrder} onChange={handleSortChange}
        >
          <option value="" disabled>Select an option</option> {/* Default option */}
          
            <option
              value="default"
              className="select-option"
            >
             Default
            </option>
              <option
              value="default"
              className="select-option"
            >
            Low to High
            </option>
              <option
            value="desc"
              className="select-option"
            >
             High to Low
            </option>
          ))
        </select>
      </div>
    </div>

  );
};

export default Filters;


