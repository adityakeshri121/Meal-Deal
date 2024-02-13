let searchValue = document.getElementById('search-bar');
let addResult = document.getElementById('search-result');

async function handleSearchChange(input) {
    var searchValue = input.value;
    console.log(searchValue.length);
    // Perform additional actions with the search value as needed
    if (searchValue.length === 1) {
        try {
            const fetchData = await fetch(`https://themealdb.com/api/json/v1/1/search.php?f=${searchValue}`);
            const jsonData = await fetchData.json();
            console.log(jsonData);
            const addData = jsonData.meals.map(one => `<div class="each-dish">
            <div id="search-meal" onclick="searchMeal(this)">${one.strMeal}</div>
            <div id="fav-icon" onclick="addToFav(this)"><i class="fa-regular fa-heart"></i></div>
        </div>`)
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
    console.log('added to fav')
    console.log(e)
}

function searchMeal(e) {
    const mealName = e.innerHTML;
    console.log(mealName)
    window.location.href = `./dishPage.html?dishName=${mealName}`;

}