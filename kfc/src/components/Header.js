// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  background: black;
  padding: 10px; 
  color: black;
  display:flex;
  justify-content:space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin: 0 20px;
  color: white;
  text-decoration: none;
`;

const Header = () => {
  return (
    <NavBar>
      <img src="/avatar.png" width="45px" height="45px"/>
      <div>
      <NavLink to="/"><b>Home</b></NavLink>
      <NavLink>|</NavLink>
      <NavLink to="/menu"><b>Menu</b></NavLink>
      </div>
      <img src="/logo.png" width="45px" height="45px"/>
    </NavBar>
  );
};

export default Header;
