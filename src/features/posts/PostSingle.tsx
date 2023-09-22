import { Link, useParams } from "react-router-dom";
import { useGetPostQuery } from "../../services/postApi.ts";

type PostParams = {
  id: string
}

const PostSingle = () => {
  const params = useParams<PostParams>();
  const { data, isLoading } = useGetPostQuery(params.id as string);

  return (
    <section className='flex flex-col gap-4'>
      {isLoading ? <h1 className='fill-black text-2xl'>LOADING...</h1> : (
        <>
          <h1 className='font-semibold text-xl'>{data?.title}</h1>
          <p className='text-base'>{data?.body}</p>
          <Link to='/' className='w-fit block p-2 bg-gray-300 rounded-md'>Back</Link>
        </>
      )}
    </section>
  );
};

export default PostSingle;