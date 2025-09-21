import React, { useState, useRef, useEffect } from "react";
import { useProducts } from "../../context/ProductContext";
import "./LeftNav.css";

const LeftNav = ({ isMobileMenuOpen }) => {
  const { filters, setFilters, allProducts, resetFilters, availableColors } =
    useProducts();

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const [priceRange, setPriceRange] = useState({
    min: filters.priceRange[0],
    max: filters.priceRange[1],
  });

  const timeout = useRef(null);

  useEffect(() => {
    setPriceRange({
      min: filters.priceRange[0],
      max: filters.priceRange[1],
    });
  }, [filters.priceRange]);

  const handlePriceChange = (type, value) => {
    setPriceRange((prev) => {
      let newRange;
      if (type === "min") {
        const newMin = Math.min(value, prev.max - 10);
        newRange = { ...prev, min: Math.max(0, newMin) };
      } else {
        const newMax = Math.max(value, prev.min + 10);
        newRange = { ...prev, max: Math.min(200, newMax) };
      }

      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      timeout.current = setTimeout(() => {
        updateFilter("priceRange", [newRange.min, newRange.max]);
      }, 300);

      return newRange;
    });
  };

  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  const getBrandDeals = () => {
    const brandCounts = {};
    allProducts.forEach((product) => {
      const brand = product.name.split(" ")[0];
      brandCounts[brand] = (brandCounts[brand] || 0) + 1;
    });

    return Object.entries(brandCounts)
      .map(([brand, count]) => ({
        brand,
        count: count.toString().padStart(2, "0"),
      }))
      .slice(0, 7);
  };

  const getHotDeals = () => {
    const hotProducts = allProducts.filter((product) => product.isHot);
    const brandCounts = {};
    hotProducts.forEach((product) => {
      const brand = product.name.split(" ")[0];
      brandCounts[brand] = (brandCounts[brand] || 0) + 1;
    });

    return Object.entries(brandCounts)
      .map(([brand, count]) => ({
        brand,
        count: count.toString().padStart(2, "0"),
      }))
      .slice(0, 7);
  };

  const handleDealClick = (deal) => {
    updateFilter("searchTerm", deal.brand);
  };

  const handleColorClick = (colorItem) => {
    const currentColors = Array.isArray(filters.colors)
      ? [...filters.colors]
      : [];
    const newColors = currentColors.includes(colorItem.color)
      ? currentColors.filter((c) => c !== colorItem.color)
      : [...currentColors, colorItem.color];

    updateFilter("colors", newColors);
  };

  const colors = [
    { id: 1, color: "red", bgColor: "bg-red-500" },
    { id: 2, color: "blue", bgColor: "bg-blue-500" },
    { id: 3, color: "green", bgColor: "bg-green-500" },
    { id: 4, color: "yellow", bgColor: "bg-yellow-500" },
    { id: 5, color: "pink", bgColor: "bg-pink-500" },
    { id: 6, color: "purple", bgColor: "bg-purple-500" },
  ];

  return (
    <aside
      className={`
      fixed md:static top-0 left-0 h-screen md:h-fit
      w-[85%] md:w-full min-w-[280px] max-w-[350px]
      bg-white md:bg-transparent
      flex flex-col gap-6 
      pt-16 md:pt-0 px-4 pb-4
      shadow-2xl md:shadow-none
      transition-transform duration-300 ease-in-out
      ${
        isMobileMenuOpen
          ? "translate-x-0"
          : "-translate-x-full md:translate-x-0"
      }
      z-50 overflow-y-auto
      shrink-0
    `}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-[#F6F7F8] rounded p-4"
      >
        <h2 className="text-2xl mb-5 font-medium text-gray-900">Hot Deals</h2>
        <div className="space-y-2">
          {getHotDeals().map((item, index) => (
            <div
              key={`${item.brand}-${index}`}
              className="flex justify-between items-center py-2 hover:bg-gray-100 rounded transition-colors cursor-pointer"
              onClick={() => handleDealClick?.(item)}
            >
              <h4 className="text-xl font-normal">{item.brand}</h4>
              <span className="text-zinc-500">{item.count}</span>
            </div>
          ))}
        </div>
      </form>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-[#F6F7F8] p-4 rounded"
      >
        <h3 className="text-2xl mb-5 font-medium text-gray-900">Price Range</h3>

        <div className="mb-4">
          <div className="flex items-center mb-6">
            <span className="text-gray-700 font-medium mr-4">Ranger:</span>
            <span className="text-gray-700 font-medium">
              ${priceRange.min.toFixed(2)} - ${priceRange.max.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="relative py-2">
          <div className="relative h-1 bg-gray-300 rounded-full mt-2">
            <div
              className="absolute h-1 bg-blue-600 rounded-full"
              style={{
                left: `${((priceRange.min - 0) / 200) * 100}%`,
                right: `${100 - ((priceRange.max - 0) / 200) * 100}%`,
              }}
            />
          </div>

          <div className="absolute top-0 left-0 right-0 h-full">
            <input
              type="range"
              min="0"
              max="200"
              step="10"
              value={priceRange.min}
              onChange={(e) =>
                handlePriceChange("min", parseInt(e.target.value))
              }
              className="range-input"
              style={{
                zIndex: priceRange.min > priceRange.max - 100 ? 25 : 15,
              }}
            />
            <input
              type="range"
              min="0"
              max="200"
              step="10"
              value={priceRange.max}
              onChange={(e) =>
                handlePriceChange("max", parseInt(e.target.value))
              }
              className="range-input"
              style={{
                zIndex: priceRange.min > priceRange.max - 100 ? 15 : 25,
              }}
            />
          </div>
        </div>
      </form>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="colorFilter-section w-full bg-[#F6F7F8] p-4 py-6 rounded"
      >
        <h3 className="text-2xl mb-5 font-medium text-gray-900">
          Color Filter
        </h3>
        <div className="flex justify-between">
          {colors.map((colorItem) => (
            <button
              key={colorItem.id}
              type="button"
              className={`w-10 h-10 rounded-full ${
                colorItem.bgColor
              } hover:opacity-80 transition-all ${
                filters.colors?.includes(colorItem.color)
                  ? "ring-2 ring-blue-500 ring-offset-2"
                  : ""
              }`}
              title={colorItem.color}
              onClick={() => handleColorClick(colorItem)}
            />
          ))}
        </div>
      </form>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-[#F6F7F8] rounded p-4"
      >
        <h2 className="text-2xl mb-5 font-medium text-gray-900">Brand</h2>
        <div className="space-y-2">
          {getBrandDeals().map((item, index) => (
            <div
              key={`${item.brand}-${index}`}
              className="flex justify-between items-center py-2 hover:bg-gray-100 rounded transition-colors cursor-pointer"
              onClick={() => handleDealClick?.(item)}
            >
              <h4 className="text-xl font-normal">{item.brand}</h4>
              <span className="text-zinc-500">{item.count}</span>
            </div>
          ))}
        </div>
      </form>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-[#F6F7F8] w-full text-xl flex justify-center items-center rounded p-4 py-6"
      >
        <button className="hover:text-blue-600 transition-colors">MORE</button>
      </form>
    </aside>
  );
};

export default LeftNav;
