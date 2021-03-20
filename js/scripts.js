
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

/*Validate pokemon height and add additional text.*/
for (let i=0; i<pokemonList.length; i++)
{

  if (pokemonList[i].height >= 4)
  document.write("Pokemon " + pokemonList[i].name + "\'s" + " height is: " + pokemonList[i].height+"." +" WOW, that’s big!" + "<br>");
  else{
  document.write("Pokemon " + pokemonList[i].name + "\'s" + " height is: "  + pokemonList[i].height+". " + "<br>");
  }
}

/*Highlight one pokemon name*/
let bigPoke = "Bulbasaur"
document.getElementById("myFav").innerHTML=bigPoke;
