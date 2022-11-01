import React from "react";
import Link from "next/link";

function PlayerList({ players }) {
  return (
    <ul>
      {players.map((player) => (
        <li key={player.name}>
          <article>
            <h2>{player.name}</h2>
            <p>{player.summary}</p>
            <p>
              <Link href={`/players/${player.name}`}>View Details</Link>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default PlayerList;
