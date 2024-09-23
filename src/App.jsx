import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Product from './components/Product';
import CartPage from './components/CartPage';
import './styles.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      name: 'BabaSuit',
      price: 'Rs.999',
      rating: 4.5,
      image: 'https://staranddaisy.in/wp-content/uploads/2022/04/330195-2.jpg',
    },
    {
      name: 'Shirt',
      price: 'Rs.799',
      rating: 4.0,
      image: 'https://4.imimg.com/data4/ED/CS/MY-10254860/boy-red-check-shirt.jpg',
    },
    {
      name: 'Shirt',
      price: 'Rs.1299',
      rating: 5.0,
      image: 'https://www.mumkins.in/cdn/shop/products/shirts-for-boys-bu011162-navyblue-1.jpg?v=1681206639',
    },
    {
      name: 'Watch',
      price: 'Rs.999',
      rating: 4.4,
      image: 'https://m.media-amazon.com/images/I/6166QQmf+YL.AC_UY1000.jpg',
    },
    {
      name: 'Belt',
      price: 'Rs.399',
      rating: 4.2,
      image: 'https://www.montblanc.com/variants/images/34480784411826304/A/w2500.jpg',
    },
    {
      name: 'Pant',
      price: 'Rs.899',
      rating: 4.6,
      image: 'https://5.imimg.com/data5/TM/ZU/KJ/SELLER-23336766/mens-formal-pant.jpg',
    }
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <Router>
      <div className="app">
        <h1>Shopping Cart App</h1>
        <nav >
          <Link to="/">Home</Link>
          <Link to="/cart">
            Cart ({cartItems.length}) 
          </Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div className="products">
                {products.map((product, index) => (
                  <Product key={index} product={product} addToCart={addToCart} />
                ))}
              </div>
            }
          />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;