import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Erro 404</h1>
      <h4>Parece que essa página não existe!</h4>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </>
  );
}
