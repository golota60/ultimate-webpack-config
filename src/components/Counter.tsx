import React, { useState } from 'react';
import { css } from '@linaria/core';

const counterContainer = css`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  text-align: center;
`;

const counterButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={counterContainer}>
      <button
        className={counterButton}
        onClick={() => setCount((val) => val - 1)}
      >
        -
      </button>
      <p>{count}</p>
      <button
        className={counterButton}
        onClick={() => setCount((val) => val + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
