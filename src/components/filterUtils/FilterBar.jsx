import React from "react";
import PropTypes from "prop-types";
import { useProducts } from "../../context/ProductContext";
import { Logs, TextAlignJustify } from "lucide-react";

const SelectField = ({ label, options, value, onChange }) => (
  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
    {label && (
      <span className="hidden sm:inline text-sm md:text-base lg:text-lg text-gray-600">
        {label}:
      </span>
    )}
    <select
      className="px-2 sm:px-2.5 md:px-3 py-1 md:py-1.5 text-sm md:text-base lg:text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[100px] sm:min-w-[120px] md:min-w-[150px]"
      value={value}
      onChange={onChange}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </div>
);

SelectField.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const FilterBar = ({ itemCount = 0 }) => {
  const { filters, onFilterChange } = useProducts();

  const categoryOptions = [
    { value: "all", label: "Categories" },
    { value: "Shoes", label: "Shoes" },
  ];

  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "priceHighToLow", label: "Price: High to Low" },
    { value: "priceLowToHigh", label: "Price: Low to High" },
  ];

  const handleCategoryChange = (e) => {
    onFilterChange("category", e.target.value);
  };

  const handleSortChange = (e) => {
    onFilterChange("sortBy", e.target.value);
  };

  return (
    <div className="w-full p-2 md:p-4 px-3 md:px-10 flex flex-wrap items-center justify-between gap-2 md:gap-4 bg-[#F6F7F8] rounded shadow-sm">
      <span className="text-sm md:text-lg font-semibold text-zinc-600 order-1 md:order-none">
        {itemCount} Item{itemCount !== 1 ? "s" : ""}
      </span>

      <div className="flex items-center justify-center w-full md:w-auto order-3 md:order-none mt-2 md:mt-0">
        <div className="flex flex-wrap items-center gap-3 md:gap-10">
          <SelectField
            label="Category"
            options={categoryOptions}
            value={filters.category}
            onChange={handleCategoryChange}
          />

          <SelectField
            label="Sort by"
            options={sortOptions}
            value={filters.sortBy}
            onChange={handleSortChange}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4 order-2 md:order-none">
        <button className="p-1 text-blue-400 hover:bg-gray-100 rounded transition-colors">
          <Logs className="h-6 w-6 md:h-8 md:w-8 font-black" />
        </button>
        <button className="p-1 text-gray-600 hover:bg-gray-100 rounded transition-colors">
          <TextAlignJustify className="h-6 w-6 md:h-8 md:w-8 font-black" />
        </button>
      </div>
    </div>
  );
};

FilterBar.propTypes = {
  itemCount: PropTypes.number,
};

export default FilterBar;
