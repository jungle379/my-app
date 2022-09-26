import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>home</title>
      </Head>
      <div className="text-blue-800 text-4xl">Hello!</div>
      <div className="my-20 text-20">
        <Link href="../posts">投稿ページへ</Link>
      </div>
      <div></div>
      <div></div>
    </>
  );
};

export default Home;
