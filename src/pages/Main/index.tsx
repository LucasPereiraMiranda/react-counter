import React from 'react';

import Header from '../../components/Header';
import Counter from '../../components/Counter';

const Main: React.FC = () => {
  return (
    <>
      <Header>Contador</Header>
      <Counter />
    </>
  );
};

export default Main;
