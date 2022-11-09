import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/products">
            <a>Produtos </a>
          </Link>
          <li>
            <Link href="/about">
              <a>Sobre </a>
            </Link>
          </li>
        </li>
      </ul>
      <h1>Hello World Next.js</h1>
    </div>
  );
}
