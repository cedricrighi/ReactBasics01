interface pokemon {
	name: string;
	imgSrc?: string;
}

export default function PokemonCard({ pokemon }) {
	return (
		<figure>
			{pokemon.imgSrc ? (
				<img src={pokemon.imgSrc} alt={pokemon.name} />
			) : (
				<p>???</p>
			)}
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
}
