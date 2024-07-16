// src/components/Popup.js
import React from 'react';
import styled from 'styled-components';

const PopupWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #333;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1000000;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const Popup = ({ message, show }) => {
  return <PopupWrapper show={show}>{message}</PopupWrapper>;
};

export default Popup;
