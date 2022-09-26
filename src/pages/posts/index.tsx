import Head from "next/head";
import Link from "next/link";

const Post = () => {
  return (
    <>
      <Head>
        <title>投稿ページ</title>
      </Head>
      <div>
        <Link href="/">Topへ</Link>
      </div>
    </>
  );
};

export default Post;
