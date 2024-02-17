let searchValue = document.getElementById('search-bar');
let addResult = document.getElementById('search-result');
const favPage = document.getElementById('fav-pg');
let searchResult = []
async function handleSearchChange(input) {
    var searchValue = input.value;
    console.log(searchValue.length);
    // Perform additional actions with the search value as needed
    if (searchValue.length === 1) {
        try {
            const fetchData = await fetch(`https://themealdb.com/api/json/v1/1/search.php?f=${searchValue}`);
            const jsonData = await fetchData.json();
            searchResult = jsonData;
            const addData = jsonData.meals.map(one => `
            <div class="each-dish">
                <div id="search-meal" onclick="searchMeal(this)">${one.strMeal}</div>
                <div id="fav-icon" onclick="addToFav(this)"><i class="fa-regular fa-heart"></i></div>
            </div>
            `)
            addResult.innerHTML = addData.map(elem => elem);


        }
        catch (e) {
            console.log(e);
            addResult.innerHTML = 'No result found!'
            searchValue = ""
        }
    }

    if (searchValue.length === 0) {
        addResult.innerHTML = 'Search Anything'
    }
}

function addToFav(e) {
    const ele = document.getElementById('search-meal')
    const dishToAdd = e.previousElementSibling.innerHTML.trim();
    console.log(dishToAdd)

    const dataToAdd = searchResult.meals.find(a => a.strMeal === dishToAdd)
    console.log(dataToAdd)

    localStorage.setItem(dishToAdd, JSON.stringify(dataToAdd));
    console.log(localStorage.getItem(dishToAdd));
}

function searchMeal(e) {
    const mealName = (e.innerHTML).trim();
    window.location.href = `./DishPage/dishPage.html?dishName=${mealName}`;
}


function goToFavPage() {
    window.location.href = `./FavDish/FavDish.html`;
}
