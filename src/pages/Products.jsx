import React from "react";

const Products = ({ products }) => {
  return (
    <div className="w-full py-10">
      <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-5 lg:px-10 py-5">
          {products.map((product, idx) => {
            return (
              <div key={idx} className="flex flex-col items-start gap-2">
                <img
                  className="w-full h-96 object-cover rounded-xl transition duration-500 ease-in-out transform group-hover:blur-sm border border-secondary"
                  src={product.imageUrl}
                  alt=""
                />
                <p>MRP: &#8377;{product.amount}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
