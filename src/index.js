import { css } from '@linaria/core';

import './styles/styles.scss';

const recipe = {
  ham: 3,
  cheese: 2
};

const header = css`
  text-transform: uppercase;
`;

const enhancedRecipe = {
  ...recipe,
  dough: 2,
  cheese: 3
};

console.log(recipe);
console.log(enhancedRecipe);