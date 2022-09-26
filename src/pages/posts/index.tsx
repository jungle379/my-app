import Head from "next/head";
import Link from "next/link";

type Data = {
  id: number;
  label: string;
};

const Post = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <Head>
        <title>投稿ページ</title>
      </Head>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="flex">
          <input
            className="border-4 border-gray-500"
            type="text"
            name="query"
          />
          <button className="border-4 border-gray-500">投稿する</button>
        </div>
      </form>
      <div className="my-20 text-2xl border-2 border-orange-500 w-[80px]">
        <Link href="/">Topへ</Link>
      </div>
    </>
  );
};

export default Post;
