//simple navbar
import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/players">Players</Link>
    </div>
  );
}
