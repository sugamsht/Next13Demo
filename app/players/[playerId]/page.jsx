import styles from "./page.module.css";

async function PlayersDetail({ params }) {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.playerId}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  // console.log("halla nagara", pokemon);
  return (
    <div className={styles.container}>
      <div>
        <h2>{pokemon.name}</h2>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Base Experience: {pokemon.base_experience}</p>
        <p>Order: {pokemon.order}</p>
      </div>
      <div>
        <img src={pokemon.sprites.front_default} alt="pokemon" />
      </div>
    </div>
  );
}

export default PlayersDetail;
