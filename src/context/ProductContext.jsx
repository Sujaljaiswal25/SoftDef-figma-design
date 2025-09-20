import { createContext, useContext, useState, useMemo, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mapToFilterColors, getColorClass } from '../utils/colorUtils';
import { generateProduct } from '../utils/productUtils';

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productsPerPage = 8;
  
  const [currentPage, setCurrentPage] = useState(() => {
    const page = parseInt(searchParams.get('page'), 10);
    return isNaN(page) || page < 1 ? 1 : page;
  });
  const baseProducts = [
    {
      "id": 1,
      "name": "Nike Air Zoom Pegasus 40",
      "price": 120,
      "discountPrice": 95,
      "discountPercent": 21,
      "ratingValue": 4.6,
      "ratingCount": 1843,
      "isHot": true,
      "colors": ["black", "white", "blue"],
      "category": "Shoes",
      "imageUrl": "https://i.pinimg.com/736x/ef/62/2c/ef622cc489f83b6eefba054434b426be.jpg"
    },
    {
      "id": 2,
      "name": "Adidas Ultraboost Light",
      "price": 180,
      "discountPrice": 150,
      "discountPercent": 17,
      "ratingValue": 4.8,
      "ratingCount": 2561,
      "isHot": true,
      "colors": ["black", "grey", "red"],
      "category": "Shoes",
      "imageUrl": "https://i.pinimg.com/736x/cb/2c/ab/cb2cab7cf7b20e622def5fec62891198.jpg"
    },
    {
      "id": 3,
      "name": "Puma Velocity Nitro 2",
      "price": 130,
      "discountPrice": 110,
      "discountPercent": 15,
      "ratingValue": 4.5,
      "ratingCount": 1024,
      "isHot": false,
      "colors": ["blue", "yellow", "black"],
      "category": "Shoes",
      "imageUrl": "https://i.pinimg.com/736x/b6/4e/af/b64eafe372ef43b94ece31e45a524b04.jpg"
    },
    {
      "id": 4,
      "name": "Reebok Floatride Energy 5",
      "price": 100,
      "discountPrice": 85,
      "discountPercent": 15,
      "ratingValue": 4.4,
      "ratingCount": 879,
      "isHot": false,
      "colors": ["white", "black", "green"],
      "category": "Shoes",
      "imageUrl": "https://i.pinimg.com/1200x/b1/6b/18/b16b18dab4bb0c4ffb7d3b78b550720f.jpg"
    },
    {
      "id": 5,
      "name": "New Balance Fresh Foam 1080v12",
      "price": 160,
      "discountPrice": 140,
      "discountPercent": 12,
      "ratingValue": 4.7,
      "ratingCount": 2150,
      "isHot": true,
      "colors": ["grey", "blue", "black"],
      "category": "Shoes",
      "imageUrl": "https://i.pinimg.com/736x/9a/b0/d8/9ab0d876ddc083ebd6f70cb88569c6e4.jpg"
    },
    {
      "id": 6,
      "name": "ASICS Gel-Kayano 30",
      "price": 165,
      "discountPrice": 149,
      "discountPercent": 10,
      "ratingValue": 4.8,
      "ratingCount": 1950,
      "isHot": true,
      "colors": ["white", "blue", "orange"],
      "category": "Shoes",
      "imageUrl": "https://i.pinimg.com/1200x/d4/fa/47/d4fa47391e691f88a08cc8da071bc4e5.jpg"
    },
    {
      "id": 7,
      "name": "Nike Air Force 1 '07",
      "price": 110,
      "discountPrice": 99,
      "discountPercent": 10,
      "ratingValue": 4.9,
      "ratingCount": 6250,
      "isHot": true,
      "colors": ["white", "black", "red"],
      "category": "Shoes",
      "imageUrl": "https://i.pinimg.com/736x/7d/1c/72/7d1c72163fe58aa082028c741de81617.jpg"
    },
    {
      "id": 8,
      "name": "Adidas Superstar",
      "price": 95,
      "discountPrice": 85,
      "discountPercent": 11,
      "ratingValue": 4.7,
      "ratingCount": 3421,
      "isHot": false,
      "colors": ["white", "black", "gold"],
      "category": "Shoes",
      "imageUrl": "https://i.pinimg.com/1200x/df/55/fa/df55fac2e9fca99c4cbba5455ae1c227.jpg"
    },
    {
      "id": 9,
      "name": "Converse Chuck Taylor All Star",
      "price": 65,
      "discountPrice": 55,
      "discountPercent": 15,
      "ratingValue": 4.6,
      "ratingCount": 4890,
      "isHot": true,
      "colors": ["black", "white", "red"],
      "category": "Shoes",
      "imageUrl": "https://i.pinimg.com/1200x/a8/f4/af/a8f4af94de7b52be55b6a43fb97dee89.jpg"
    },
    {
      "id": 10,
      "name": "Vans Old Skool",
      "price": 70,
      "discountPrice": 59,
      "discountPercent": 16,
      "ratingValue": 4.5,
      "ratingCount": 3321,
      "isHot": true,
      "colors": ["black", "white", "blue"],
      "category": "Shoes",
      "imageUrl": "https://i.pinimg.com/736x/98/ea/b2/98eab2039f0f82de63b57b75bd0c8ec0.jpg"
    },
    {
      "id": 11,
      "name": "Nike Dunk Low Retro",
      "price": 120,
      "discountPrice": 105,
      "discountPercent": 13,
      "ratingValue": 4.8,
      "ratingCount": 4021,
      "isHot": true,
      "colors": ["red", "black", "white"],
      "category": "Shoes",
      "imageUrl": "https://i.pinimg.com/1200x/d9/04/d8/d904d86e3db252131b59b18e7b21449e.jpg"
    },
    {
      "id": 12,
      "name": "Adidas Gazelle",
      "price": 100,
      "discountPrice": 85,
      "discountPercent": 15,
      "ratingValue": 4.6,
      "ratingCount": 2890,
      "isHot": false,
      "colors": ["blue", "black", "green"],
      "category": "Shoes",
      "imageUrl": "https://i.pinimg.com/736x/ee/33/6c/ee336c4aa6820da50d7d8a6c37699135.jpg"
    },
    {
      "id": 13,
      "name": "Puma Suede Classic",
      "price": 75,
      "discountPrice": 65,
      "discountPercent": 13,
      "ratingValue": 4.5,
      "ratingCount": 2178,
      "isHot": false,
      "colors": ["black", "red", "grey"],
      "category": "Shoes",
      "imageUrl": "https://i.pinimg.com/1200x/a0/db/2e/a0db2e48e5d89bc083f14c4517165214.jpg"
    },
    {
      "id": 14,
      "name": "Reebok Classic Leather",
      "price": 85,
      "discountPrice": 72,
      "discountPercent": 15,
      "ratingValue": 4.6,
      "ratingCount": 1560,
      "isHot": false,
      "colors": ["white", "black"],
      "category": "Shoes",
      "imageUrl": "https://i.pinimg.com/736x/41/cb/7e/41cb7e36694f9b07eff20d7de785ca23.jpg"
    },
    {
      "id": 15,
      "name": "Under Armour HOVR Phantom 3",
      "price": 140,
      "discountPrice": 125,
      "discountPercent": 11,
      "ratingValue": 4.7,
      "ratingCount": 1240,
      "isHot": true,
      "colors": ["black", "blue", "red"],
      "category": "Shoes",
      "imageUrl": "https://i.pinimg.com/736x/c5/22/71/c52271a7beaddc7c91428a04f684ef74.jpg"
    }
  ];

  const countColors = (products) => {
    const counts = { red: 0, blue: 0, green: 0, yellow: 0, pink: 0, purple: 0 };
    
    products.forEach(product => {
      product.colors.forEach(color => {
        const mappedColor = mapToFilterColors([color])[0];
        if (counts.hasOwnProperty(mappedColor)) {
          counts[mappedColor]++;
        }
      });
    });
    
    return counts;
  };

  const generateMissingProducts = (products) => {
    const colorCounts = countColors(products);
    const additionalProducts = [];
    let nextId = products.length + 1;
    
    Object.entries(colorCounts).forEach(([color, count]) => {
      const needed = Math.max(0, 6 - count);
      
      for (let i = 0; i < needed; i++) {
        additionalProducts.push(generateProduct(color, nextId++));
      }
    });
    
    return [...products, ...additionalProducts];
  };
  
  const allProducts = useMemo(() => {
    return generateMissingProducts(baseProducts);
  }, []);

  const [filters, _setFilters] = useState({
    category: 'all',
    sortBy: 'featured',
    priceRange: [0, 200],
    rating: 0,
    searchTerm: '',
    isHot: false,
    colors: []
  });
  
  const setFilters = useCallback((updater) => {
    _setFilters(prevFilters => {
      const newFilters = typeof updater === 'function' ? updater(prevFilters) : updater;
      if (newFilters.colors && !Array.isArray(newFilters.colors)) {
        newFilters.colors = [];
      }
      return { ...prevFilters, ...newFilters };
    });
  }, []);


  const onFilterChange = useCallback((key, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [key]: value
    }));
    setCurrentPage(1);
  }, [setFilters]);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(allProducts.map(product => product.category))];
    return [
      { value: 'all', label: 'All Categories' },
      ...uniqueCategories.map(category => ({
        value: category,
        label: category
      }))
    ];
  }, [allProducts]);

  const availableColors = useMemo(() => {
    const allColors = allProducts.flatMap(product => product.colors);
    return [...new Set(allColors)].sort();
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    if (filters.category !== 'all') {
      filtered = filtered.filter(p => p.category.toLowerCase() === filters.category.toLowerCase());
    }

    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(p => p.name.toLowerCase().includes(term));
    }

    const [minPrice, maxPrice] = filters.priceRange;
    filtered = filtered.filter(p => p.discountPrice >= minPrice && p.discountPrice <= maxPrice);

    if (filters.rating > 0) {
      filtered = filtered.filter(p => p.ratingValue >= filters.rating);
    }

    if (filters.isHot) {
      filtered = filtered.filter(p => p.isHot);
    }

    if (filters.colors.length > 0) {
      filtered = filtered.filter(p => 
        p.colors.some(color => filters.colors.includes(color))
      );
    }

    const sortOptions = {
      priceHighToLow: (a, b) => b.discountPrice - a.discountPrice,
      priceLowToHigh: (a, b) => a.discountPrice - b.discountPrice,
      newest: (a, b) => b.id - a.id,
      popularity: (a, b) => b.ratingCount - a.ratingCount,
      rating: (a, b) => b.ratingValue - a.ratingValue,
      discount: (a, b) => b.discountPercent - a.discountPercent,
      featured: (a, b) => {
        if (a.isHot && !b.isHot) return -1;
        if (!a.isHot && b.isHot) return 1;
        return b.ratingValue - a.ratingValue;
      }
    };

    const sortFunction = sortOptions[filters.sortBy] || sortOptions.featured;
    return [...filtered].sort(sortFunction);
  }, [filters, allProducts]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / productsPerPage));

  const currentProducts = useMemo(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [currentPage, filteredProducts, productsPerPage]);

  const handlePageChange = useCallback((newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', newPage.toString());
    setSearchParams(newSearchParams, { replace: true });
    
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  }, [currentPage, totalPages, searchParams, setSearchParams]);

  useEffect(() => {
    if (totalPages === 0) return;

    const urlPage = parseInt(searchParams.get('page'), 10);
    const validPage = isNaN(urlPage) || urlPage < 1 ? 1 : Math.min(urlPage, totalPages);

    if (validPage !== currentPage) {
      setCurrentPage(validPage);
    } else if (urlPage !== validPage) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('page', validPage.toString());
      setSearchParams(newSearchParams, { replace: true });
    }
  }, [searchParams, totalPages, currentPage, setSearchParams]);

  const resetFilters = useCallback(() => {
    setFilters({
      category: 'all',
      sortBy: 'featured',
      priceRange: [0, 200],
      rating: 0,
      searchTerm: '',
      isHot: false,
      colors: []
    });
    setCurrentPage(1);
  }, [setFilters]);

  // Get filtered products without pagination
  const getFilteredProducts = useCallback(() => {
    return filteredProducts;
  }, [filteredProducts]);

  // Context value
  const value = useMemo(
    () => ({
      allProducts,
      products: currentProducts,
      totalProducts: filteredProducts.length,
      filters,
      setFilters,
      resetFilters,
      onFilterChange,
      categories,
      availableColors,
      currentPage,
      totalPages,
      paginate: handlePageChange,
      getFilteredProducts,
      getProductById: (id) => allProducts.find(product => product.id === parseInt(id)),
      getProductsByCategory: (category) => allProducts.filter(product => 
        category === 'all' ? true : product.category.toLowerCase() === category.toLowerCase()
      )
    }),
    [
      allProducts, 
      currentProducts, 
      filteredProducts, 
      filters, 
      resetFilters, 
      onFilterChange, 
      categories, 
      availableColors, 
      currentPage, 
      totalPages, 
      handlePageChange, 
      getFilteredProducts
    ]
  );

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};