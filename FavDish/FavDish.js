const favDishList = document.getElementById('fav-dish-list');
console.log('favdish')

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    const newFav = document.createElement('div');
    newFav.innerHTML = `
    <div id="fav-card">
        <img src="${value[0].strMealThumb}" width="200" height="200" >
        <div>
            <div onclick="redDishPage(this)" id="title-open"}>${value[0].strMeal}</div>
            <div><button onclick="removeDish('${key}')">Remove</button></div>
        </div>
    </div>
    ` ;

    favDishList.appendChild(newFav);
    console.log(value[0]);
}

function redDishPage(e) {
    console.log(e.innerHTML)
    window.location.href = `../dishPage.html?dishName=${e.innerHTML}`;
}

function removeDish(key) {

    localStorage.removeItem(key);

    // Remove the corresponding div from the DOM
    const removedDiv = document.getElementById('fav-card');
    removedDiv.parentElement.removeChild(removedDiv);
}



