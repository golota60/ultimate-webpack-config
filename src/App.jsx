import React from 'react';
import { styled } from '@linaria/react';
import Counter from './components/Counter';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <AppContainer>
      Hello 👋 Have fun with your project.
      <Counter />
    </AppContainer>
  )
}

export default App;
