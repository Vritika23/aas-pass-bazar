// PurchaseOptions.jsx
import React, { useState } from 'react';

const PurchaseOptions = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  
  // Sample product data if not provided
  const defaultProduct = {
    id: 1,
    name: "Handcrafted Ceramic Vase",
    price: 65.99,
    salePrice: null,
    stock: 12,
    variants: [
      { id: 1, name: "Classic Blue", inStock: true, image: "/api/placeholder/50/50" },
      { id: 2, name: "Terracotta", inStock: true, image: "/api/placeholder/50/50" },
      { id: 3, name: "Forest Green", inStock: false, image: "/api/placeholder/50/50" }
    ],
    shipping: {
      standard: { price: 5.99, time: "3-5 business days" },
      express: { price: 12.99, time: "1-2 business days" }
    },
    localPickup: true,
    returns: "30-day returns on unused items"
  };

  // Use provided product or default
  const productData = product || defaultProduct;
  
  // State for selected options
  const [selectedVariant, setSelectedVariant] = useState(
    productData.variants.find(v => v.inStock) || productData.variants[0]
  );
  const [selectedShipping, setSelectedShipping] = useState("standard");
  
  // Calculate total price
  const calculateTotal = () => {
    const basePrice = productData.salePrice || productData.price;
    const shippingCost = selectedShipping === "pickup" ? 0 : productData.shipping[selectedShipping].price;
    return (basePrice * quantity + shippingCost).toFixed(2);
  };
  
  // Handle quantity change
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= productData.stock) {
      setQuantity(value);
    }
  };
  
  // Increment/decrement quantity
  const incrementQuantity = () => {
    if (quantity < productData.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden my-6 p-6">
      <div className="mb-4">
        <div className="flex justify-between items-start">
          <div>
            {productData.salePrice ? (
              <div className="flex items-center">
                <span className="text-2xl font-bold text-red-600">${productData.salePrice.toFixed(2)}</span>
                <span className="ml-2 text-lg text-gray-500 line-through">${productData.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-gray-900">${productData.price.toFixed(2)}</span>
            )}
          </div>
          
          <div className="text-sm">
            <span className={`${productData.stock > 0 ? 'text-green-600' : 'text-red-600'} font-medium`}>
              {productData.stock > 0 ? `In Stock (${productData.stock} available)` : 'Out of Stock'}
            </span>
          </div>
        </div>
      </div>
      
      {/* Variants Selection */}
      {productData.variants.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Options</h3>
          <div className="flex flex-wrap gap-2">
            {productData.variants.map(variant => (