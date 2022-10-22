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
    const titles = e.currentTarget.foo.value;
    const day = e.currentTarget.day.value;
    addData({
      text,
      titles,
      day,
    });
    e.currentTarget.reset();
  };

  return (
    <>
      <Head>
        <title>投稿ページ</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <input
            className="border-4 mx-5 h-[80px] border-gray-500 text-black"
            type="text"
            name="foo"
            autoComplete="off"
            placeholder="タイトルを入力して下さい"
            required
          />
          <input
            className="border-4 mx-5 h-[80px] border-gray-500 text-black"
            type="text"
            name="text"
            autoComplete="off"
            placeholder="内容を入力して下さい"
            required
          />
          <input
            className="border-4 mx-5 h-[80px] border-gray-500 text-black"
            type="date"
            name="day"
            id="today"
            required
          />
          <button className="border-4 border-gray-500 w-[100px]">
            投稿する
          </button>
        </div>
      </form>
      <div className="flex justify-center">
        <div className="my-10 mx-10 text-2xl border-2 border-orange-500 w-[120px] text-center">
          <Link href="/">Topへ</Link>
        </div>
      </div>
    </>
  );
};

export default Post;
