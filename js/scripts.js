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

document.write ("<h1> Part 1: forEach() Loops </h1>")
pokemonList.forEach(function(pokemonData){
  document.write(pokemonData.name + "</br>");
});


document.write ("<h1> Part 2: IIFE </h1>")

function getAll() {
  return pokemonList;
}

function add(pokemon) {
  pokemonList.push(pokemon);
}

return {
  getAll: getAll,
  add: add
};
})();



pokemonRepository.add({ name: 'Pika', height:3.5, type:['fighting','poison']  });

pokemonRepository.getAll().forEach(function(getData){

  document.write(" - " + getData.name + " - ");
});
