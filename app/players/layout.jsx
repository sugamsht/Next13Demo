import styles from "./layout.module.css";
import PlayerList from "./PlayerList";

async function PlayersLayout({ children }) {
  const players = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  //   console.log("akshdaksjd", players.results);

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <PlayerList players={players.results} />
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default PlayersLayout;
