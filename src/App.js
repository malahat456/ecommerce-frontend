// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-header">
          <h1>Welcome to the Ecommerce App</h1>
        </div>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
