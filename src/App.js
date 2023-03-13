import React, { useState } from 'react';
import Cart from "./Components/Cart"
import Home from "./Components/Home"
import "./App.css"
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';

const App = () => {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
