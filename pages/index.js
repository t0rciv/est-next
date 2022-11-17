import styles from "../styles/Home.module.css";

import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="Roupas, Calçados, Bonés"></meta>
        <meta
          name="description"
          content="Encontre a melhor roupa para você"
        ></meta>
      </Head>
      <div className={styles.main}>
        <h1 className={styles.title}>To-Do com Next.js</h1>
      </div>
    </>
  );
}
