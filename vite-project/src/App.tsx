import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
	},
];

function App() {
	const [PokemonIndex, setPokemonIndex] = useState(0);
	return (
		<div>
			{PokemonIndex > 0 ? (
				<button onClick={() => setPokemonIndex(PokemonIndex - 1)}>
					Précédent
				</button>
			) : null}
			<PokemonCard pokemon={pokemonList[PokemonIndex]} />
			{PokemonIndex < pokemonList.length - 1 ? (
				<button onClick={() => setPokemonIndex(PokemonIndex + 1)}>
					Suivant
				</button>
			) : null}
		</div>
	);
}

export default App;
