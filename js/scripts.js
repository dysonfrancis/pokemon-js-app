//IIFE and repository of the project
let pokemonRepository = (function () {

  let pokemonList = [];

  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

// Function to add pokemons to list
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

// Function to return pokemon list
  function getAll() {
    return pokemonList;
  }

// Create and display pokemon list and buttons
function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("selected");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }

//Load API and promise
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        //console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

//Load API item details and Promise
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

// Display pokemon details as an alert
  function showDetails(item) {


    pokemonRepository.loadDetails(item).then(function () {
      alert('Pokemon Name: ' + item.name + "\n" + 'Pokemon Image URL: ' + item.imageUrl + "\n" + 'Pokemon Height: '+ item.height + "\n" + 'Pokemon Types: ' + JSON.stringify(item.types));
    });
  }

//return function values
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();


pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
