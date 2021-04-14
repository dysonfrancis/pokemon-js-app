var pokemonRepository = (function() {
let pokemonList = [
  {
    name:'Bulbasaur', height:7, types:['grass', 'poison']
  },
  {
    name:'Pikachu', height:0.4, types:['flying', 'electric']
  },
  {
    name:'Seel', height:1.1, type:['steel','fire']
  },
  {
    name:'Dugtrio', height:0.7, type:['rock','ground']
  },
  {
    name:'Charmander', height:0.6, type:['fairy','ice']
  },
  {
    name:'Arbok', height:3.5, type:['fighting','poison']
  },
  {
    name:'Kakuna', height:0.6, type:['fairy','poison']
  }

];


function getAll() {
  return pokemonList;
}

function add(pokemon) {
  pokemonList.push(pokemon);
}

function addListItem(pokemon) {
let pokemonList = document.querySelector(".pokemon-list");
let listpokemon = document.createElement("li");
let button = document.createElement('button');
button.addEventListener('click', function (event)
{
showDetails(pokemon.name);
});
button.innerText = pokemon.name;
button.classList.add("button-class");
listpokemon.appendChild(button);
pokemonList.appendChild(listpokemon);
}

function showDetails(pokemon) {
    console.log(pokemon);
}

return {
  getAll: getAll,
  add: add,
  addListItem: addListItem

};
})();



pokemonRepository.add({ name: 'Pika', height:3.5, type:['fighting','poison']  });

pokemonRepository.getAll().forEach(function(pokemon){
pokemonRepository.addListItem(pokemon);
});
