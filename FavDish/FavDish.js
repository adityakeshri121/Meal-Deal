const favDishList = document.getElementById('fav-dish-list');
console.log('favdish')

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    const newFav = document.createElement('div');
    newFav.innerHTML = `
    <div id="fav-card">
        <img src="${value[0].strMealThumb}" width="300" height="300" >  
    </div>
    ` ;

    favDishList.appendChild(newFav);
    console.log(value[0]);
}



