import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Todos.module.css";

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await data.json();

  return {
    props: { todos },
  };
}

export default function Todos({ todos }) {
  return (
    <>
      <Head>
        <title>Tarefas</title>
      </Head>
      <h1> Tarefas a fazer</h1>
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} -{" "}
            <Link href={`/todos/${todo.id}`}>
              <a>Ver mais</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </>
  );
}
