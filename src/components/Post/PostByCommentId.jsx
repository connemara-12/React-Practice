import Link from "next/link";
import { usePost } from "src/hooks/usePost";

export const PostByCommentId = (props) => {
  const { data, error, isLoading } = usePost(props.id);

  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Link href={`/posts/${data.id}`}>
        <a className=" block shadow rounded bg-gray-50 hover:bg-gray-100 text-xl hover:text-blue-500">
          {data?.title}
        </a>
      </Link>
    </div>
  );
};
