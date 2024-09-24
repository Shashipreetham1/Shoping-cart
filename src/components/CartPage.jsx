import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

const CartPage = ({ cartItems, removeFromCart }) => {
  const [sum, setSum] = useState(0);
  const [count, setCount] = useState(0);
  const navigate = useNavigate(); 
  useEffect(() => {
    let totalSum = 0;
    let totalCount = 0;
    cartItems.forEach((item) => {
      totalSum += item.price;
      totalCount += 1;
    });
    setSum(totalSum);
    setCount(totalCount);
  }, [cartItems]);

  const handleContinueShopping = () => {
    navigate('/'); 
  };

  return (
    <div className="cart-page">
      <div className="div">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="card mb-3 d-flex flex-row">
            <img
              src={item.image}
              alt={item.title}
              className="img-thumbnail"
              style={{ maxWidth: '150px', margin: '10px' }}
            />
            <div className="card-body flex-grow-1">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">Price: ${item.price.toFixed(2)}</p>
              <p className="card-text">Rating: {item.rating.rate} ★</p>
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          </div>
          ))
        )}
      </div>
      <div>
        {cartItems.length > 0 && (
          <div className="b">
            <h1>Order Summary</h1>
            <p>SubTotal: ${sum.toFixed(2)}</p>
            <p>Shipping <span className="material-symbols-outlined">help</span>: ${count}</p>
            <p className="display-6">Order Total: ${(sum + count).toFixed(2)}</p>
            <div className="d-flex justify-content-start flex-column">
              <button className="btn btn-info btn-lg mb-2">Check Out</button>
              <button className="btn btn-secondary" onClick={handleContinueShopping}>
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
