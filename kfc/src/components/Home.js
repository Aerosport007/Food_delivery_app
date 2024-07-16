// src/components/Home.js
import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../image_back.png'; // Adjust path as necessary
import './Home.css';
import PopularDishesRibbon from './PopularDishesRibbon';


const HomeContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh; /* Adjust height as needed */
  overflow: hidden; /* Prevents background image from scrolling */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ContentContainer = styled.div`
  padding: 50px;
  color: white; /* Example: Set text color to white */
  font: bold;
  size: 30;
  align-items: top;
`;

const Home = () => {
  return (
    <HomeContainer>
      <ContentContainer>
        { <PopularDishesRibbon /> }
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
