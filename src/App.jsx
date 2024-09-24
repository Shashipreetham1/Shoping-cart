import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Product from './components/Product';
import CartPage from './components/CartPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products))
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div className="app">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">Shopping Cart App</Link>
            <div className="navbar-nav">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/cart">Cart ({cartItems.length})</Link>
            </div>
            <input
              type="text"
              className="form-control ml-auto"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ maxWidth: '300px' }}
            />
        </nav>
        <div className="container my-4">
          <Routes>
            <Route
              path="/"
              element={
                
                <div className="row">
                  {filteredProducts.map((product) => (
                    <div className="col-md-4 col-sm-6 mb-3" key={product.id}>
                      <Product product={product} addToCart={addToCart} />
                    </div>
                  ))}
                </div>
              }
            />
            <Route
              path="/cart"
              element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
