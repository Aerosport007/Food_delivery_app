// src/components/Cart.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../contexts/CartState';

const CartContainer = styled.div`
  padding: 20px;
`;

const CartItem = styled.div`
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
`;

const ItemImage = styled.img`
  width: 100px; /* Adjust size as needed */
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const RemoveButton = styled.button`
  background: #ff0000;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <CartContainer>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <CartItem key={index}>
            <ItemImage src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <RemoveButton onClick={() => handleRemove(item.id)}>Remove</RemoveButton>
          </CartItem>
        ))
      )}
    </CartContainer>
  );
};

export default Cart;
