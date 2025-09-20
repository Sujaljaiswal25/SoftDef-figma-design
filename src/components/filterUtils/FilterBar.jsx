import React from "react";
import PropTypes from "prop-types";
import { useProducts } from "../../context/ProductContext";
import { Logs, TextAlignJustify } from "lucide-react";

const SelectField = ({ label, options, value, onChange }) => (
  <div className="flex items-center gap-2">
    {label && <span className="text-lg text-gray-600">{label}:</span>}
    <select
      className="px-3 py-1.5 text-lg  border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[150px]"
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
    // Add more categories as needed
  ];

  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "priceHighToLow", label: "Price: High to Low" },
    { value: "priceLowToHigh", label: "Price: Low to High" },
   
  ];

  const handleCategoryChange = (e) => {
    onFilterChange('category', e.target.value);
  };

  const handleSortChange = (e) => {
    onFilterChange('sortBy', e.target.value);
  };

  return (
    <div className="w-full p-4 px-10 flex flex-wrap items-center justify-between gap-4 bg-[#F6F7F8] rounded shadow-sm">
     <span className="text-lg font-semibold text-zinc-600">
        {itemCount} Item{itemCount !== 1 ? "s" : ""}
      </span>
     <div className="flex items-center gap-10">

      <div className="flex flex-wrap items-center gap-10">
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
      <div className="flex items-center gap-4">
        <button className="p-1 text-blue-400 hover:bg-gray-100 rounded">
          <Logs className="h-8 w-8 font-black" />
        </button>
        <button className="p-1 text-gray-600 hover:bg-gray-100 rounded">
         <TextAlignJustify className="h-8 w-8 font-black " />
        </button>
      </div>
    </div>
  );
};

FilterBar.propTypes = {
  itemCount: PropTypes.number,
};

export default FilterBar;
