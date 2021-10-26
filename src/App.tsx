import React from 'react';
import { styled } from '@linaria/react';
import Counter from './components/Counter';
import Svg from './assets/doodle.svg';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <AppContainer>
      Hello 👋 Have fun with your project. Here&apos;s a happy doodle to help
      you get going.
      <Svg />
      <Counter />
    </AppContainer>
  );
};

export default App;
