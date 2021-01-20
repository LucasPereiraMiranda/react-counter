import React, { useCallback, useState } from 'react';

import { Container } from './styles';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const handleIncrementButton = useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  const handleDecrementButton = useCallback(() => {
    setNumber(number - 1);
  }, [number]);

  return (
    <>
      <Container>
        <div>{number}</div>
        <button type="submit" onClick={handleIncrementButton}>
          Incrementar
        </button>
        <button type="submit" onClick={handleDecrementButton}>
          Decrementar
        </button>
      </Container>
    </>
  );
};

export default Counter;
