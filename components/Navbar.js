import Link from "next/link";

import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/">
          <a>Home </a>
        </Link>
      </li>
      <li>
        <Link href="/todos">
          <a>Tarefas </a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>Sobre </a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contato </a>
        </Link>
      </li>
    </ul>
  );
}
