const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

//event listeners
searchBtn.addEventListener('click', getMealList);


//get meal list that matched with your ingredient
function getMealList(){
  let searchInputTxt = document.getElementById('search-input').value.trim();
  //console.log(searchInputTxt);
   fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast ').then(response => response.json())
  .then(data => {
    console.log(data);})
//      let html = '';
//     if(data.meals){
//     data.meals.forEach(meal => {
//       html += '<div class ="meal-item" data-id = "${meal.idMeal}><div class ="meal-img"><img class ="myImage" src="${meal.strMealThumb}"alt="Nigerian soup"></div><div class="meal-name"><h3>${meal.StrMeal</h3><a href ="#" class ="recipe-btn"> Get Recipe</a></div></div>';
//    });
//    }
//   mealList.innerHTML= html;
//   })
}