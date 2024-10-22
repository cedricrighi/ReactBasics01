interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	message: string;
}

export default function NavBar({
	pokemonIndex,
	setPokemonIndex,
	message,
}: NavBarProps) {
	return (
		<>
			<button
				type="button"
				onClick={() => {
					setPokemonIndex(pokemonIndex - 1);
				}}
			>
				{message}
			</button>
		</>
	);
}
