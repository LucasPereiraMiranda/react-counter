import React from 'react';
import { AiFillInteraction } from 'react-icons/ai';
import { Container } from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <AiFillInteraction color="#f12314" size={50} />
      <h1>{children}</h1>
    </Container>
  );
};

export default Header;
