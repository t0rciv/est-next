import Link from "next/link";
import { useRouter } from "next/router";

export default function Comment() {
  const router = useRouter();

  const todoId = router.query.todoId;
  const commentId = router.query.commentId;

  return (
    <>
      <Link href={`/todos/${todoId}`}>
        <a>Voltar</a>
      </Link>
      <h2>Exibindo o comentário: {commentId}</h2>
      <p>da Tarefa {todoId}</p>
    </>
  );
}
