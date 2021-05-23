var pokemonRepo = (function () {
 var pokemonList = [];
 // Loads API url
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';
  // Adding a pokemon to pokemon list
  function add(pokemon) {
    // Validate pokemon
    if (typeof pokemon === 'object') {
      pokemonList.push(pokemon);
    }
  }
  //Gets the entire list from pokemonList Array
  function getAll() {
    return pokemonList;
  };
  // Add each item to li
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerHTML = `<p>${pokemon.name}</p>`;
    button.classList.add('btn');
    button.classList.add('btn-list');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemonModal');
    listPokemon.classList.add('col');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    // Event Listener for button
    button.addEventListener('click', function () {
      showDetails(pokemon)
    });
  }
  // Loads Pokemon List
    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item, index) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`,
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }
    // Load Details of each
    function loadDetails(item) {
      let url = item.detailsUrl;
        return fetch(url).then(function (response) {
        return response.json();
          })
          .then(function (details) {
          // adding item's properties
          item.imageUrlFront = details.sprites.front_default;
          item.imageUrlBack = details.sprites.back_default;
          item.height = details.height;
          item.types = details.types;
          item.weight = details.weight;
          item.abilities = details.abilities;
        }).catch(function (e) {
        console.error(e);
        });
      }
    // Show Details
    function showDetails(pokemon) {
      pokemonRepo.loadDetails(pokemon).then(function () {
      showModal(pokemon);

      });
    }
    function showModal(pokemon) {
      // Define each model element
      let modalHeader = $('.modal-header');
      let modalTitle = $('.modal-title');
      let modalBody = $('.modal-body');
      let modalFooter = $('.modal-footer');
      // Empty modal content
      modalTitle.empty();
      modalBody.empty();
      modalHeader.empty();
      //Get the pokemon name
       let nameElement = $('<h2' + pokemon.name + '</h2>');

      let modal = document.createElement('div');
      modal.classList.add('modal');
      //get the Image
      let imageElementFront = $('<img class="pokemon-image">');
      imageElementFront.attr('src', pokemon.imageUrlFront);
      // get image back
      let imageElementBack = $('<img class="pokemon-image">');
      imageElementBack.attr('src', pokemon.imageUrlBack);
      //get the height of the pokemon
      let heightElement = $('<p> Height: ' + pokemon.height + '</p>');
      //get the weight of the pokemon
      let weightElement = $('<p> Weight: ' + pokemon.weight + '</p>');
      // get the Type of each pokemon, these are objects with the arrays
      let typesDiv = document.createElement('div');
        typesDiv.classList.add('type-wrapper');
        typesDiv.classList.add('row');
        pokemon.types.forEach((type) => {
        let typesElement = document.createElement('div');
        let typesText = document.createElement('p');
        typesText.innerText = type.type.name;
        typesElement.classList.add('type');
        typesElement.classList.add('col');
        typesElement.classList.add(type.type.name);
        typesElement.appendChild(typesText);
        typesDiv.appendChild(typesElement);
      });
      // Append Modal Elements
      modalTitle.append(nameElement);
      modalBody.append(imageElementFront);
      // modalBody.append(imageElementBack);
      modalBody.append(typesDiv);
      modalBody.append(heightElement);
      modalBody.append(weightElement);
  }
// END OF MODAL
  return {
    showDetails: showDetails,
    addListItem: addListItem,
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();
//console.log(pokemonRepo.getAll());
pokemonRepo.loadList().then(function() {
  pokemonRepo.getAll().forEach(function(pokemon) {
    pokemonRepo.addListItem(pokemon);
  })
});
