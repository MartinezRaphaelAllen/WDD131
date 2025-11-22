import recipes from "./recipes.mjs";

function randomNum(num)
{
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list)
{
    const listLen = list.length;
    const chosenNum = randomNum(listLen);
    return list[chosenNum];
}

function recipeTemplate(recipe)
{
    return `<div class="contentContainer">
                <image src="${recipe.image}" alt="image of an apple crisp"></image>
                <div class="containerContent">
                    <ul class="recipeTag">
                        ${tagsTemplate(recipe.tags)}
                    </ul>
                    <h2>${recipe.name}</h2>
                    ${ratingTemplate(recipe.rating)}
                    <p class="contentDescription">${recipe.description}</p>
                </div>
            </div>`
}

function tagsTemplate(tags)
{
    let html = "";
    tags.forEach((tag) =>{
        html += `<li>${tag}</li>`;
    });
    return html;
}

function ratingTemplate(rating)
{
    let html = `<span
	    class="rating"
	    role="img"
	    aria-label="Rating: ${rating} out of 5 stars"
        >`;

    for (let i = 0; i < 5; i++) {
        if (i < rating)
            html+= `<span aria-hidden="true" class="icon-star">⭐</span>`
        else
            html+= `<span aria-hidden="true" class="icon-star-empty">☆</span>`
    }
    html += "</span>"

    return html
}

function renderRecipes(recipeList = [])
{
    const contentBody = document.querySelector("#recipe-list");
    contentBody.innerHTML = ""; // clear previous results

    if (recipeList.length === 0) {
        contentBody.innerHTML = `
            <h3 class="no-results">
                <p>No results found</p>
            </h3>
        `;
        return;
    }

    recipeList.forEach(recipe => {
        contentBody.innerHTML += recipeTemplate(recipe);
    });
}

function filter(query) {
    return recipes.filter(recipe => {
        const q = query.toLowerCase();

        return (
            recipe.name.toLowerCase().includes(q) ||
            recipe.description.toLowerCase().includes(q) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(q)) ||
            recipe.recipeIngredient.some(ing =>
            ing.toLowerCase().includes(q))
        )
    }).sort((a, b) => a.name.localeCompare(b.name));
}

const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("#submitButton");

function searchHandler(e) {
    e.preventDefault();
    const query = searchInput.value.trim().toLowerCase();

    const results = filter(query);

    renderRecipes(results);
}

function init()
{
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
    searchButton.addEventListener("click", searchHandler);
}

init();