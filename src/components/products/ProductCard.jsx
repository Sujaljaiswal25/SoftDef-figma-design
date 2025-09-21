import React from "react";
import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://i.pinimg.com/1200x/9c/19/b7/9c19b7d5125eea2e0e416f242c1d24cc.jpg";
  };

  return (
    <div className="w-full max-w-sm bg-white rounded overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="relative bg-gray-50 h-48 sm:h-52 md:h-56 flex items-center justify-center transition-all duration-300 hover:bg-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={handleImageError}
          loading="lazy"
          style={{
            mixBlendMode: "multiply",
          }}
        />

        {product.isHot && (
          <div className="absolute top-1 left-0">
            <span className="bg-red-500 text-white text-lg font-bold px-6 py-3 rounded">
              HOT
            </span>
          </div>
        )}

        {product.isNew && (
          <div className="absolute top-4 left-4">
            <span className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-lg">
              New
            </span>
          </div>
        )}
      </div>

      <div className="px-6 py-4 bg-white">
        <h3 className="text-xl font-bold text-gray-800 mb-3 text-center leading-tight">
          {product.name}
        </h3>

        <div className="flex items-center justify-center mb-2">
          <div className="flex space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className={`${
                  i < Math.floor(product.ratingValue || 0)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-300 text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-2xl font-bold text-cyan-500">
            ${product.discountPrice || product.price}
          </span>
          {product.discountPrice && (
            <>
              <span className="text-lg text-gray-400 line-through">
                ${product.price}
              </span>
              <span className="text-lg font-semibold text-red-500">
                {product.discountPercent}% Off
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

