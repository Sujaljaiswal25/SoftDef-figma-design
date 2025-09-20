import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useProducts } from "../../context/ProductContext";

const PRICE_CONFIG = {
  MIN: 0,
  MAX: 200,
  STEP: 10,
  MIN_DIFFERENCE: 10,
};

const COLOR_FILTERS = [
  { id: 1, color: "red", bgColor: "bg-red-500" },
  { id: 2, color: "blue", bgColor: "bg-blue-500" },
  { id: 3, color: "green", bgColor: "bg-green-500" },
  { id: 4, color: "yellow", bgColor: "bg-yellow-500" },
  { id: 5, color: "pink", bgColor: "bg-pink-500" },
  { id: 6, color: "purple", bgColor: "bg-purple-500" },
];

const PriceRangeSlider = ({ min, max, onChange, className = "" }) => {
  const rangeRef = useRef(null);

  const minPercent =
    ((min - PRICE_CONFIG.MIN) / (PRICE_CONFIG.MAX - PRICE_CONFIG.MIN)) * 100;
  const maxPercent =
    100 -
    ((max - PRICE_CONFIG.MIN) / (PRICE_CONFIG.MAX - PRICE_CONFIG.MIN)) * 100;

  return (
    <div className={`relative py-2 ${className}`}>
      <div className="relative h-1 bg-gray-300 rounded-full mt-2">
        <div
          ref={rangeRef}
          className="absolute h-1 bg-blue-600 rounded-full"
          style={{
            left: `${minPercent}%`,
            right: `${maxPercent}%`,
          }}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 h-full">
        <input
          type="range"
          min={PRICE_CONFIG.MIN}
          max={PRICE_CONFIG.MAX}
          step={PRICE_CONFIG.STEP}
          value={min}
          onChange={(e) => onChange("min", parseInt(e.target.value))}
          className="range-input"
          style={{
            zIndex: min > max - 100 ? 25 : 15,
          }}
        />
        <input
          type="range"
          min={PRICE_CONFIG.MIN}
          max={PRICE_CONFIG.MAX}
          step={PRICE_CONFIG.STEP}
          value={max}
          onChange={(e) => onChange("max", parseInt(e.target.value))}
          className="range-input"
          style={{
            zIndex: min > max - 100 ? 15 : 25,
          }}
        />
      </div>
    </div>
  );
};

const HotDeals = ({ deals, onDealClick }) => (
  <div className="space-y-2">
    {deals.map((item, index) => (
      <div
        key={`${item.brand}-${index}`}
        className="flex justify-between items-center py-2 hover:bg-gray-100 rounded transition-colors cursor-pointer"
        onClick={() => onDealClick?.(item)}
      >
        <h4 className="text-xl font-normal">{item.brand}</h4>
        <span className="text-zinc-500">{item.count}</span>
      </div>
    ))}
  </div>
);

const LeftNav = () => {
  const { filters, setFilters, allProducts, resetFilters, availableColors } =
    useProducts();

  const onFilterChange = useCallback(
    (key, value) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [key]: value,
      }));
    },
    [setFilters]
  );

  const [localPriceRange, setLocalPriceRange] = useState({
    min: filters.priceRange[0],
    max: filters.priceRange[1],
  });

  useEffect(() => {
    setLocalPriceRange({
      min: filters.priceRange[0],
      max: filters.priceRange[1],
    });
  }, [filters.priceRange]);

  const handlePriceChange = useCallback(
    (type, value) => {
      setLocalPriceRange((prev) => {
        let newRange;
        if (type === "min") {
          const newMin = Math.min(
            value,
            prev.max - PRICE_CONFIG.MIN_DIFFERENCE
          );
          newRange = { ...prev, min: Math.max(PRICE_CONFIG.MIN, newMin) };
        } else {
          const newMax = Math.max(
            value,
            prev.min + PRICE_CONFIG.MIN_DIFFERENCE
          );
          newRange = { ...prev, max: Math.min(PRICE_CONFIG.MAX, newMax) };
        }

        if (priceUpdateTimeout.current) {
          clearTimeout(priceUpdateTimeout.current);
        }

        priceUpdateTimeout.current = setTimeout(() => {
          onFilterChange("priceRange", [newRange.min, newRange.max]);
        }, 300);

        return newRange;
      });
    },
    [onFilterChange]
  );

  const priceUpdateTimeout = useRef(null);

  useEffect(() => {
    return () => {
      if (priceUpdateTimeout.current) {
        clearTimeout(priceUpdateTimeout.current);
      }
    };
  }, []);

  const brandDeals = useMemo(() => {
    const brandCounts = {};
    allProducts.forEach((product) => {
      const brand = product.name.split(" ")[0]; // Extract first word as brand
      brandCounts[brand] = (brandCounts[brand] || 0) + 1;
    });

    return Object.entries(brandCounts)
      .map(([brand, count]) => ({
        brand,
        count: count.toString().padStart(2, "0"),
      }))
      .slice(0, 7); // Limit to 7 items
  }, [allProducts]);

  const hotDeals = useMemo(() => {
    const hotProducts = allProducts.filter((product) => product.isHot);
    const brandCounts = {};
    hotProducts.forEach((product) => {
      const brand = product.name.split(" ")[0]; // Extract first word as brand
      brandCounts[brand] = (brandCounts[brand] || 0) + 1;
    });

    return Object.entries(brandCounts)
      .map(([brand, count]) => ({
        brand,
        count: count.toString().padStart(2, "0"),
      }))
      .slice(0, 7); // Limit to 7 items
  }, [allProducts]);

  const handleDealClick = useCallback(
    (deal, e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      onFilterChange("searchTerm", deal.brand);
    },
    [onFilterChange]
  );

  const handleColorClick = useCallback(
    (colorItem, e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const currentColors = Array.isArray(filters.colors)
        ? [...filters.colors]
        : [];
      
      const newColors = currentColors.includes(colorItem.color)
        ? currentColors.filter(c => c !== colorItem.color)
        : [...currentColors, colorItem.color];
      
      onFilterChange("colors", newColors);
    },
    [filters.colors, onFilterChange]
  );

  return (
    <aside className="w-full max-w-xs h-fit flex flex-col gap-8 pt-0 p-4">
      <form onSubmit={(e) => e.preventDefault()} className="bg-[#F6F7F8] rounded p-4">
        <h2 className="text-2xl mb-5 font-medium text-gray-900">Hot Deals</h2>
        <HotDeals deals={hotDeals} onDealClick={handleDealClick} />
      </form>

      <form onSubmit={(e) => e.preventDefault()} className="bg-[#F6F7F8] p-4 rounded">
        <h3 className="text-2xl mb-5 font-medium text-gray-900">Price Range</h3>

        <PriceRangeSlider
          min={localPriceRange.min}
          max={localPriceRange.max}
          onChange={handlePriceChange}
          className="mb-4"
        />

        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <span>${localPriceRange.min}</span>
          <span>${localPriceRange.max}</span>
        </div>
      </form>

      <style>{`
        .range-input {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: transparent;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          pointer-events: none;
          outline: none;
        }

        /* Webkit browsers (Chrome, Safari, Edge) */
        .range-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #3b82f6;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          pointer-events: all;
          position: relative;
          transition: all 0.2s ease;
        }

        .range-input::-webkit-slider-thumb:hover {
          background: #2563eb;
          transform: scale(1.1);
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        }

        .range-input::-webkit-slider-thumb:active {
          transform: scale(1.15);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
        }

        /* Firefox */
        .range-input::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #3b82f6;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          pointer-events: all;
          transition: all 0.2s ease;
        }

        .range-input::-moz-range-thumb:hover {
          background: #2563eb;
          transform: scale(1.1);
        }
      `}</style>

      <form onSubmit={(e) => e.preventDefault()} className="colorFilter-section w-full bg-[#F6F7F8] p-4 py-6 rounded">
        <h3 className="text-2xl mb-5 font-medium text-gray-900">
          Color Filter
        </h3>
        <div className="flex flex-wrap gap-3">
          {COLOR_FILTERS.map((colorItem) => (
            <button
              key={colorItem.id}
              type="button"
              className={`w-8 h-8 rounded-full ${
                colorItem.bgColor
              } hover:opacity-80 transition-all ${
                filters.colors?.includes(colorItem.color)
                  ? "ring-2 ring-blue-500 ring-offset-2"
                  : ""
              }`}
              title={colorItem.color}
              aria-label={`Filter by ${colorItem.color} color`}
              onClick={(e) => handleColorClick(colorItem, e)}
            />
          ))}
        </div>
      </form>


      <form onSubmit={(e) => e.preventDefault()} className="bg-[#F6F7F8] rounded p-4">
        <h2 className="text-2xl mb-5 font-medium text-gray-900">Brand</h2>
        <HotDeals deals={brandDeals} onDealClick={handleDealClick} />
      </form>

       <form onSubmit={(e) => e.preventDefault()} className="bg-[#F6F7F8] w-full text-xl flex justify-center items-center rounded p-4 py-6">
        <button 
          type="button"
          onClick={(e) => {
            e.preventDefault();
            resetFilters();
          }}
          className="hover:text-blue-600 transition-colors"
        >
          MORE
        </button>
      </form>
    </aside>
  );
};

export default LeftNav;
