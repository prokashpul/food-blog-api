// api request 
function loadApi() {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=')
        .then(response => response.json())
        .then(data => getFood(data))
}
loadApi()

function foodCard() {

}

function getFood(foods) {
    const foodContainer = document.getElementById('food');
    foods.meals.forEach(food => {
        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.innerHTML = ` <div class="card">
        <img src="${food.strMealThumb}" class="card-img-top " alt="${food.strMeal}" >
        <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
        </div>
    </div>`
        foodContainer.appendChild(div)
    });
}