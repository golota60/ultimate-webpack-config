import React from 'react';
import { css } from '@linaria/core';

const header = css`
  text-transform: uppercase;
  background-color: lightblue;
`;

const App = () => {
  return (
    <h2 className={header}>
      I am an app
    </h2>
  )
}

export default App
