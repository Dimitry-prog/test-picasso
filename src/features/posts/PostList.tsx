import { useGetPostsQuery } from "../../services/postApi.ts";
import { useEffect, useState } from "react";
import PostItem from "./PostItem.tsx";

const PostList = () => {
  const [limit, setLimit] = useState<number>(10);
  const { data, isFetching } = useGetPostsQuery(limit);

  useEffect(() => {
    const onScroll = () => {
      const isReachedBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      console.log('isReachedBottom', isReachedBottom)
      if (isReachedBottom && !isFetching) {
        console.log("Fetching more data...");
        setLimit(limit + 10);
      }
    };

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    }
  }, [limit, isFetching])

  return (
    <ul className='flex flex-col gap-4'>
      {data && (
        <>
          {data.map(post => (
            <PostItem post={post} key={post.id}/>
          ))}
        </>
      )}
    </ul>
  );
};

export default PostList;