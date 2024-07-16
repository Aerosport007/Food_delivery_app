// src/components/FoodList.js
import React from 'react';
import styled from 'styled-components';
import FoodItem from './FoodItem';

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FoodList = ({ items }) => {
  return (
    <ListWrapper>
      {items.map((item) => (
        <FoodItem key={item.id} item={item} />
      ))}
    </ListWrapper>
  );
};

export default FoodList;