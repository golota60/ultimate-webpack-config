import React from 'react';
import { render } from 'react-dom';
import AppContainer from './App';
import './styles/styles.scss';

render(<React.StrictMode><AppContainer /></React.StrictMode>, document.getElementById('root')) 

const recipe = {
  hamSlices: 3,
  cheeseSlices: 2
};

const enhancedRecipe = {
  ...recipe,
  doughKilos: 2,
  cheeseSlices: 3
};

console.log(recipe);
console.log(enhancedRecipe);