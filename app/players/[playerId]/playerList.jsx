import Link from "next/link";

function playersList({ players }) {
  return (
    <ul>
      {players.map((player) => (
        <li key={player.id}>
          <article>
            <h2>{player.title}</h2>
            <p>{player.summary}</p>
            <p>
              <Link href={`/players/${player.id}`}>View Details</Link>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default playersList;
