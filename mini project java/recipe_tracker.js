const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: ""
};
//  push all recipes1,2,3 in recipes

recipes.push(recipe1, recipe2, recipe3);

//  funst for length
function getTotalIngredients(ingredients) {
  return ingredients.length;
}

// fun count 
function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}
// passing the recipesc from all 

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

console.log(recipes);