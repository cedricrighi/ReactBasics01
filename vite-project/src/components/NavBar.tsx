interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

export default function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
	return (
		<>
			{pokemonList.map((pokemon, index) => {
				return (
					<button
						type="button"
						key={pokemon.name}
						onClick={() => {
							setPokemonIndex(index);
						}}
					>
						{pokemon.name}
					</button>
				);
			})}
		</>
	);
}
