const favDishList = document.getElementById('fav-dish-list');
console.log('favdish')
console.log(JSON.parse(localStorage.getItem(localStorage.key(1))))
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    const newFav = document.createElement('div');
    console.log(value);
    newFav.innerHTML = `
    <div id="fav-card">
    <img src="${value.strMealThumb}" width="200" height="200" >
        <div>
            <div onclick="redDishPage(this)" id="title-open"}>${value.strMeal}</div>
            <div><button id="remove-fav" onclick="removeDish('${key}')">Remove</button></div>
        </div>
    </div>
    ` ;

    favDishList.appendChild(newFav);

}

function redDishPage(e) {
    console.log(e.innerHTML)
    window.location.href = `../DishPage/dishPage.html?dishName=${e.innerHTML}`;
}

function removeDish(key) {

    localStorage.removeItem(key);

    // Remove the corresponding div from the DOM
    const removedDiv = document.getElementById('fav-card');
    removedDiv.parentElement.removeChild(removedDiv);
    alert('added');
}



