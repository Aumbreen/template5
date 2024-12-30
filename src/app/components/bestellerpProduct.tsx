"use client";
import Image from "next/image";

export default function BestsellerProducts() {
  // Data for 8 products
  const products = [
    { id: 1, Image: "/pic1.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 2, Image: "/product-cover-5 (7).png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 3, Image: "/product-cover-5 (8).png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 4, Image: "/product-cover-5 (9).png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 5, Image: "/product-cover-5 (10).png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 6, Image: "/fixed-height (3).png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 7, Image: "/product-cover-5 (11).png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 8, Image: "/product-cover-5 (12).png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
  ];

  return (
    <div className="bg-white py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-blue-600 font-medium uppercase">Featured Products</p>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Bestseller Products</h1>
        <p className="text-gray-500">Problems trying to resolve the conflict between</p>
      </div>

      {/* Product Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Product Image */}
            <Image
              className="w-full object-cover"
              src={product.Image}
              alt={product.title}
              width={300}
              height={400}
            />
            {/* Product Details */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{product.department}</p>
              <div className="text-gray-500 text-sm mb-4">
                <span className="line-through">{product.oldPrice}</span>
                <span className="text-green-500 font-bold ml-2">{product.newPrice}</span>
              </div>
              {/* Product Colors */}
              <div className="flex justify-center gap-2">
                {product.colors.map((color, index) => (
                  <span key={index} className={`w-4 h-4 rounded-full ${color}`}></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
