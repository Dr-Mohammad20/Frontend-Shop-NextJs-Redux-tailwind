import Link from 'next/link';
import React from 'react';

const ProductCard = () => {
  return (
    <Link
      href="/product/1"
      className="shadow-3xl transform duration-300 hover:scale-105 overflow-hidden bg-white  cursor-pointer">
      {/* use (shadow-3xl) a theme for box shadow (theme create in tailwind.config.js) */}
      <img className="w-full" src="/product-1.webp" alt="Product Image" />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Product Name</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-mono">$20.00</p>
          <p className="text-base font-medium line-through">$25.00</p>
          <p className="ml-auto text-base font-medium text-green-500">
            20% off
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
