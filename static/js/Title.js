import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.h1`
  font-size: 48px;
  color: black;
  background-image: linear-gradient(to right, #43C6AC, #F77062);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Title = () => {
  return (
    <TitleContainer>CAPTAIN</TitleContainer>
  );
};

export default Title;