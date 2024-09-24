import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="card h-100">
      <img src={product.image} alt={product.title} className="card-img-top ig " />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">Price: ${product.price.toFixed(2)}</p>
        <p className="card-text">Rating: {product.rating.rate} ★</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
