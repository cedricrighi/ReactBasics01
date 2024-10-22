interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

export default function NavBar({ pokemonList }: NavBarProps) {
	return (
		<>
			{pokemonList.map((pokemon) => {
				return (
					<button type="button" key={pokemon.name}>
						{pokemon.name}
					</button>
				);
			})}
		</>
	);
}
