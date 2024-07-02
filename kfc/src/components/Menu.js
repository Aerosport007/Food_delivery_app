// src/components/Menu.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../contexts/CartState';

const MenuContainer = styled.div`
  padding: 20px;
`;

const FoodItem = styled.div`
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

const Button = styled.button`
  background: #ff0000;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  const menuItems = [
    { id: 1, name: 'Chicken Bucket', price: 20, image: 'https://img.freepik.com/premium-photo/crispy-fried-chicken-bucket-chicken-bucket_434193-7759.jpg?w=1480' },
    { id: 2, name: 'Zinger Burger', price: 10, image: 'https://img.freepik.com/premium-photo/crispy-fried-chicken-bucket-chicken-bucket_434193-7759.jpg?w=1480' },
    { id: 3, name: 'Fries', price: 5, image: 'https://img.freepik.com/premium-photo/crispy-fried-chicken-bucket-chicken-bucket_434193-7759.jpg?w=1480' },
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <MenuContainer>
      <h2>Menu</h2>
      {menuItems.map((item) => (
        <FoodItem key={item.id}>
          <ItemImage src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
        </FoodItem>
      ))}
    </MenuContainer>
  );
};

export default Menu;
