// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Header from './components/Header';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { CartProvider } from './contexts/CartState';
import Cart from './components/Cart';
import IntroAnimation from './components/IntroAnimation';

const AppContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  width: 60px;
  height: 50px;
  font-size: 16px;
  cursor: pointer;
  background: url('/cart.png') no-repeat center center;
  background-size: cover;
  color: black;
  border: solid;
  border-color: grey;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
`;



function App() {
  const navigate = useNavigate();
  function handleClick() {
      navigate("/cart");
    }
  return (
    <CartProvider>
      <IntroAnimation />
    <AppContainer>
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Button onClick={handleClick} />
    </AppContainer>
    </CartProvider>
  );
}

export default App;
