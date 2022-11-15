import Link from "next/link";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>
      <h1>Página de Contato</h1>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </>
  );
}
