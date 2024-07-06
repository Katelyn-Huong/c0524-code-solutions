type Props = {
  pokedex: Pokemon[];
};

type Pokemon = {
  number: string;
  name: string;
};

export function PokemonList({ pokedex }: Props) {
  const pokemonItems = pokedex.map((pokemon) => (
    <li key={pokemon.number}>
      {pokemon.name}
      {pokemon.number}
    </li>
  ));

  return <ul>{pokemonItems}</ul>;
}
