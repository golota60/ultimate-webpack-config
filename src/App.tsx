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

interface Props {
  xd?: string;
}

const App = (props: Props) => {
  return (
    <AppContainer>
      Hello 👋 Have fun with your project. Here's a happy doodle to help you get going.
      <Svg />
      <Counter />
    </AppContainer>
  )
}

export default App;
