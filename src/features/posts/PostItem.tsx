import { PostType } from "./postsTypes.ts";
import { Link } from "react-router-dom";

type PostItemProps = {
  post: PostType;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <li className='flex flex-col gap-2'>
      <h3 className='text-xl'>{post.id}. {post.title}</h3>
      <p className='text-base line-clamp-2'>{post.body}</p>
      <Link to={`/posts/${post.id}`} className='p-2 rounded-md self-start bg-gray-300'>Read full post</Link>
    </li>
  );
};

export default PostItem;