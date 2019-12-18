const recipes = document.querySelectorAll('.itemIndex')

for (let recipe of recipes) {
  recipe.addEventListener('click', function () {
    const recipeIndex = recipe.getAttribute('id') 
    window.location.href=`/recipes/${recipeIndex}`;
  })
}