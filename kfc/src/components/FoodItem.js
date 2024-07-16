// src/components/FoodItem.js
import React from 'react';
import styled from 'styled-components';
import { CartContext } from '../contexts/CartState';
import { useContext, useState } from 'react';
import Popup from './popup';

const ItemWrapper = styled.div`
  
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin: 10px;
  text-align: center;
  width: 200px;
`;

const Button = styled.button`
  background: #ff0000;
  color: white;
  border: none; 
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const ItemImage = styled.img`
  width: 100px; /* Adjust size as needed */
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const FoodItem = ({ item }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState(''); 
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (item) => {
    addToCart(item);
    setPopupMessage(`${item.name} ordered`);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };
  return (
    <ItemWrapper>
      <ItemImage src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <h5 >${item.price}</h5>

      <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>  
    </ItemWrapper>
  );
};

export default FoodItem;