const params = new URLSearchParams(window.location.search);
const dishName = (params.get('dishName')).trim();
const dishCard = document.getElementById('dish-card')
let dishData;
const ingAndMeas = [];

async function getDishDetails() {

    const getDishDetails = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`)
    const dishDetailsJson = await getDishDetails.json();
    dishData = dishDetailsJson.meals[0];

    console.log('aa')
    dishCard.innerHTML = `
    <div class="dishcard">
        <div id="img-ing">
            <img width="300" height="300" src=${dishData.strMealThumb}>
            <div id="fav-div">
                <div id="ingredients" onclick="getIngredientsData()"> INGREDIENTS </div>
                <div style="margin-left:15px; cursor:pointer" onclick="addDishToFav()"><i class="fa-regular fa-heart" style="color: #ff0000;"></i></div>
            </div>
            <div id="ing-list"></div>
            
        </div>
        <div class="dish-heading">
            <h3syle>${dishData.strMeal}</h3> 
            <span>${dishData.strArea}</span> 
            <span>${dishData.strCategory}
             <br/>
        </div>
        <h4>Recipie</h4>
        <p id="recipie-para">${dishData.strInstructions}</p>
        <div id="readMoreLink" class="read-more-link" onclick="toggleReadMore()">Read More...</div>
    </div>`

    const ingList = document.getElementById("ing-list");


    for (let i = 0; i <= 20; i++) {
        const ingKey = `strIngredient${i}`;
        const mesKey = `strMeasure${i}`;
        const ingEach = document.createElement('div');
        if (dishData[ingKey] && dishData[mesKey]) {
            ingAndMeas.push({
                ingredient: dishData[ingKey],
                measure: dishData[mesKey]
            })
            console.log(ingList)
            ingEach.textContent = `${dishData[ingKey]} \u2192 ${dishData[mesKey]}`
            ingList.appendChild(ingEach);

        }
    }

    console.log(ingAndMeas)



}




function getIngredientsData() {
    const ing = document.getElementById('ingredients');
    const ingList = document.getElementById('ing-list');

    console.log(ingList.style.display)
    if (ingList.style.display === 'none') {
        ingList.style.display = 'inline'
    }
    else {
        ingList.style.display = 'none'
    }
}

function toggleReadMore() {
    const recipiePara = document.getElementById('recipie-para');
    const toggleBtn = document.getElementById('readMoreLink');

    if (toggleBtn.textContent === 'Read More...') {
        recipiePara.style.height = 'auto';
        toggleBtn.textContent = 'Read Less'
    }
    else if (toggleBtn.textContent === 'Read Less') {
        recipiePara.style.height = '90px';
        toggleBtn.textContent = "Read More..."
    }

}

getDishDetails();

function addDishToFav() {
    const getDishName = document.getElementById("")
    console.log(dishData);
    localStorage.setItem(dishData.strMeal, JSON.stringify(dishData));
    console.log(localStorage.getItem(dishData.strMeal));
}
