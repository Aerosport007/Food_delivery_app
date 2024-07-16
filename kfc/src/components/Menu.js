// src/components/Menu.js
import styled from 'styled-components';
import React, { useState,useContext } from 'react';
import SearchBar from './SearchBar';
import FoodList from './FoodList';

const MenuContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Menu = () => {
  const foodItems = [
    { id: 1, name: 'Chicken Bucket', price: 20, image: 'https://img.freepik.com/premium-photo/crispy-fried-chicken-bucket-chicken-bucket_434193-7759.jpg?w=1480' },
    { id: 2, name: 'Zinger Burger', price: 10, image: 'https://5.imimg.com/data5/FX/TE/GLADMIN-40426501/chicken-zinger-500x500.png' },
    { id: 3, name: 'Fries', price: 5, image: 'https://static.toiimg.com/thumb/78294659.cms?width=680&height=512&imgsize=126277' },
    {id: 4, name: 'pizza margherita', price: 20, image: 'https://media1.agfg.com.au/images/recipes/1550/hero-300.jpg' },
    { id: 5, name: 'Deluxe burger', price: 23, image: 'https://as1.ftcdn.net/v2/jpg/07/78/95/12/1000_F_778951274_kOtvymDCpPBfh4anbfQ6Tia3t5yFHSiX.jpg' },
    { id: 6, name: 'Daddy wilson', price: 5, image: 'https://thegourmetbonvivant.com/wp-content/uploads/2022/01/chocolate-cake-milkshake-768x1152.png' },
    { id: 7, name: 'loaded fries', price: 23, image: 'https://cdn-rdb.arla.com/kraft-en/loaded-cheese-fries/1984660106.jpeg?w=1230&h=670&mode=crop&ak=617569bf&hm=a5ba9a24' },
    { id: 8, name: 'wilson COMBO', price: 5, image: 'https://media.discordapp.net/attachments/970018117893894165/1257620480823787592/daddywilson.jpg?ex=668511d8&is=6683c058&hm=8fe08dcdea1af316e4cb6e8146802421445ef943dce343c3c92c0e063edfe526&=&format=webp&width=593&height=593' },
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const filteredItems = foodItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <MenuContainer>
      <h2>Menu</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FoodList items={filteredItems} />
    </MenuContainer>
  );
};

export default Menu;
