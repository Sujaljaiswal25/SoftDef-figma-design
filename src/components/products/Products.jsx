import React, { useEffect } from 'react';
import { useProducts } from '../../context/ProductContext';
import ProductCard from './ProductCard';
import FilterBar from '../filterUtils/FilterBar';
import Pagination from './Pagination';

const Products = () => {
  const { products, totalProducts, filters, currentPage, totalPages, paginate } = useProducts();
  
  // Reset to first page when filters change
  useEffect(() => {
    paginate(1);
  }, [filters]);

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-full mx-auto">
        {/* Filter Bar */}
        <div className="mb-8">
          <FilterBar itemCount={products.length} />
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No products found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {filters.category !== 'all' || filters.searchTerm || filters.rating > 0 || 
               filters.priceRange[0] > 0 || filters.priceRange[1] < 200 || filters.isHot || filters.colors.length > 0
                ? "Try adjusting your filters to find what you're looking for."
                : "No products are currently available."}
            </p>
            {(filters.category !== 'all' || filters.searchTerm || filters.rating > 0 || 
              filters.priceRange[0] > 0 || filters.priceRange[1] < 200 || filters.isHot || filters.colors.length > 0) && (
              <button
                onClick={() => window.location.reload()} 
                className="mt-4 px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            paginate={paginate} 
          />
        )}
      </div>
    </div>
  );
};

export default Products;