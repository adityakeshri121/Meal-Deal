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
            const addData = jsonData.meals.map(one => `<li>${one.strMeal}</li>`)
            console.log(addResult.innerHTML)
            addResult.innerHTML = addData.map(elem => elem)
        }
        catch (e) {
            console.log(e);
        }
    }

    if (searchValue.length === 0) {
        addResult.innerHTML = 'No result found'
    }
}