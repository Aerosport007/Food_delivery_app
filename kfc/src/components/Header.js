// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  background: #ff0000;
  padding: 10px;
  color: white;
`;

const NavLink = styled(Link)`
  margin: 0 20px;
  color: white;
  text-decoration: none;
`;

const Header = () => {
  return (
    <NavBar>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </NavBar>
  );
};

export default Header;
