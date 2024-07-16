// src/components/SearchBar.js
import React from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  margin: 20px;
  text-align: center;
`;

const SearchInput = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 16px;
`;

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <SearchBarWrapper>
      <SearchInput
        type="text"
        placeholder="Search for item..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;