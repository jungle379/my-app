import { useAtom } from "jotai";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ComponentProps } from "react";
import { addDatasAtom } from "../../state/todo";

const Post: NextPage = () => {
  const [_, addData] = useAtom(addDatasAtom);

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    const text = e.currentTarget.text.value;
    addData({ text });
    e.currentTarget.reset();
  };

  return (
    <>
      <Head>
        <title>投稿ページ</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <input
            className="border-4 border-gray-500"
            type="text"
            name="text"
            autoComplete="off"
            required
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
