import Link from "next/link";

export async function getStaticProps(context) {
  const { params } = context;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
  );

  const todo = await data.json();

  return {
    props: { todo },
  };
}

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);

  const data = await response.json();

  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

export default function Todo({ todo }) {
  return (
    <>
      <Link href="/todos">
        <a>Voltar</a>
      </Link>
      <h2>Exibindo a Tarefa - {todo.id}</h2>
      <h3>info: {todo.title}</h3>
      <p>
        Comentário: Lorem ipsum...
        <Link href={`/todos/${todo.id}/comments/1`}>
          <a>Detalhes</a>
        </Link>
      </p>
      <p>
        Comentário: Neque porro...
        <Link href={`/todos/${todo.id}/comments/2`}>
          <a>Detalhes</a>
        </Link>
      </p>
      <p>
        Comentário: Ipsum lorem...
        <Link href={`/todos/${todo.id}/comments/3`}>
          <a>Detalhes</a>
        </Link>
      </p>
    </>
  );
}
