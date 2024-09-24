import React, { useState, useEffect } from 'react';

const CartPage = ({ cartItems, removeFromCart }) => {
  const [sum, setSum] = useState(0);
  const [count, setCount] = useState(0);

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

  return (
    <div className="cart-page ">
      <div className="div">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Rating: {item.rating} ★</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <div >
        {cartItems.length > 0 && (
          <div className="b">
            <h1>Order Summary</h1>
            <p>SubTotal: ${sum}</p>
            <p>Shipping <span className="material-symbols-outlined">help</span>: ${count}</p>
            <p className="display-6">Order Total: ${sum + count}</p>
            <button className="btn btn-info">Check Out</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
