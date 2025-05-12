/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {

    // loop over each item in the data
<<<<<<< HEAD
    for(let i=0; i < games.length; i++){

        // create a new div element, which will become the game card
        const gameCard = document.createElement("div");

        // add the class game-card to the list
        gameCard.classList.add("game-card");
=======


        // create a new div element, which will become the game card


        // add the class game-card to the list

>>>>>>> bbf4bb72fb0b24535ab3b750c73f49f5ed5fab7d

        // set the inner HTML using a template literal to display some info 
        // about each game
        // TIP: if your images are not displaying, make sure there is space
        // between the end of the src attribute and the end of the tag ("/>")
<<<<<<< HEAD
        gameCard.innerHTML =
            `<div>
                <img class="game-img" src="${games[i].img}" />
                <h1>${games[i].name}</h1>
                <p>${games[i].description}</p>
                <p>Backers: ${games[i].backers.toLocaleString()}</p>
            </div>`;

        // append the game to the games-container
        gamesContainer.appendChild(gameCard);
    }
=======


        // append the game to the games-container

>>>>>>> bbf4bb72fb0b24535ab3b750c73f49f5ed5fab7d
}

// call the function we just defined using the correct variable
// later, we'll call this function using a different list of games
<<<<<<< HEAD
addGamesToPage(GAMES_JSON);
=======
>>>>>>> bbf4bb72fb0b24535ab3b750c73f49f5ed5fab7d


/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers
<<<<<<< HEAD
const totalContributions = GAMES_JSON.reduce((acc, game) => {
    return acc + game.backers;
}, 0)

// set the inner HTML using a template literal and toLocaleString to get a number with commas
contributionsCard.innerHTML =
`${totalContributions.toLocaleString()}`;
=======


// set the inner HTML using a template literal and toLocaleString to get a number with commas

>>>>>>> bbf4bb72fb0b24535ab3b750c73f49f5ed5fab7d

// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");

<<<<<<< HEAD
const totalRaised = GAMES_JSON.reduce((acc, game) => {
    return acc + game.pledged;
}, 0);

// set inner HTML using template literal
raisedCard.innerHTML = `$${totalRaised.toLocaleString()}`;
=======
// set inner HTML using template literal

>>>>>>> bbf4bb72fb0b24535ab3b750c73f49f5ed5fab7d

// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");

<<<<<<< HEAD
gamesCard.innerHTML = `${GAMES_JSON.length}`;
=======
>>>>>>> bbf4bb72fb0b24535ab3b750c73f49f5ed5fab7d

/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have not yet met their goal
<<<<<<< HEAD
    const unfundedGames = GAMES_JSON.filter((game) => {
        return game.pledged < game.goal;
    })

    // use the function we previously created to add the unfunded games to the DOM
    addGamesToPage(unfundedGames);
=======


    // use the function we previously created to add the unfunded games to the DOM

>>>>>>> bbf4bb72fb0b24535ab3b750c73f49f5ed5fab7d
}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have met or exceeded their goal
<<<<<<< HEAD
    const fundedGames = GAMES_JSON.filter((game) => {
        return game.pledged >= game.goal;
    });

    // use the function we previously created to add unfunded games to the DOM
    addGamesToPage(fundedGames);
=======


    // use the function we previously created to add unfunded games to the DOM

>>>>>>> bbf4bb72fb0b24535ab3b750c73f49f5ed5fab7d
}

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);

    // add all games from the JSON data to the DOM
<<<<<<< HEAD
    addGamesToPage(GAMES_JSON);
}

// select each button in the "Our Games" section
const unfundedbtn = document.getElementById("unfunded-btn");
const fundedbtn = document.getElementById("funded-btn");
const allbtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button
unfundedbtn.addEventListener("click", filterUnfundedOnly);
fundedbtn.addEventListener("click", filterFundedOnly);
allbtn.addEventListener("click", showAllGames);
=======

}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button

>>>>>>> bbf4bb72fb0b24535ab3b750c73f49f5ed5fab7d

/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games
<<<<<<< HEAD
const numUnfundedGames = GAMES_JSON.filter((game) => game.pledged < game.goal).length;

// create a string that explains the number of unfunded games using the ternary operator
const displayStr = `A total of $${totalRaised.toLocaleString()} has been raised for ${GAMES_JSON.length} games.
Currently, ${numUnfundedGames} game${numUnfundedGames === 1 ? '' : 's' } ${numUnfundedGames == 1 ? 'remain' : 'remains'} unfunded.
We need your help to fund ${numUnfundedGames === 1 ? 'this' : 'these' } amazing ${numUnfundedGames === 1 ? 'game' : 'games' }!`

// create a new DOM element containing the template string and append it to the description container
const templateStr = document.createElement("p");
templateStr.innerHTML = displayStr;
descriptionContainer.append(templateStr);
=======


// create a string that explains the number of unfunded games using the ternary operator


// create a new DOM element containing the template string and append it to the description container
>>>>>>> bbf4bb72fb0b24535ab3b750c73f49f5ed5fab7d

/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames =  GAMES_JSON.sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});

// use destructuring and the spread operator to grab the first and second games
<<<<<<< HEAD
const [firstGame, secondGame, ...rest] = sortedGames;

// create a new element to hold the name of the top pledge game, then append it to the correct element
const topPledge = document.createElement("p");
topPledge.innerHTML = firstGame.name;
firstGameContainer.appendChild(topPledge);

// do the same for the runner up item
const secondPledge = document.createElement("p");
secondPledge.innerHTML = secondGame.name;
secondGameContainer.appendChild(secondPledge);
=======

// create a new element to hold the name of the top pledge game, then append it to the correct element

// do the same for the runner up item
>>>>>>> bbf4bb72fb0b24535ab3b750c73f49f5ed5fab7d
