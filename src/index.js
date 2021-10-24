import './styles/styles.css';
const recipe = {
  ham: 3,
  cheese: 2
};

const enhancedRecipe = {
  ...recipe,
  dough: 2,
  cheese: 3
};

console.log(recipe);
console.log(enhancedRecipe);