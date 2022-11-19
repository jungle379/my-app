import { useAtom } from "jotai";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ComponentProps } from "react";
import toast, { Toaster } from "react-hot-toast";
import { addDatasAtom } from "../../state/todo";

const Post: NextPage = () => {
  const [_, addData] = useAtom(addDatasAtom);

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    const text = e.currentTarget.text.value;
    const title = e.currentTarget.foo.value;
    const day = e.currentTarget.day.value;
    const url = e.currentTarget.url.value;
    addData({
      text,
      title,
      day,
      url,
    });
    toast.success("投稿が完了しました");
    e.currentTarget.reset();
  };

  return (
    <>
      <Head>
        <title>投稿ページ</title>
      </Head>
      <div className="flex justify-between">
        <div>
          <h1>投稿フォーム</h1>
        </div>
        <div className="my-10 mx-10 text-2xl border-2 border-orange-500 w-[120px] text-center">
          <Link href="/">ホームへ</Link>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between my-10">
            <input
              className="border-4 mx-5 h-[60px] border-gray-500 text-black w-1/2"
              type="text"
              name="foo"
              autoComplete="off"
              placeholder="店名を入力して下さい  ※必須"
              required
            />
            <input
              className="border-4 mx-5 h-[60px] border-gray-500 text-black"
              type="date"
              name="day"
              id="today"
            />
          </div>
          <div>
            <input
              className="border-4 mx-5 h-[200px] border-gray-500 text-black w-1/2 whitespace-normal"
              type="text"
              name="text"
              autoComplete="off"
              placeholder="内容を入力して下さい  ※必須"
              required
            />
          </div>
          <div className="flex justify-between my-10">
            <input
              className="border-4 mx-5 h-[60px] border-gray-500 text-black w-1/2"
              type="text"
              name="url"
              autoComplete="off"
              placeholder="お店のURLを入力して下さい"
            />
            <button className="border-4 border-gray-500 w-[200px]">
              投稿する
            </button>
          </div>
          <Toaster position="bottom-right" reverseOrder={false} />
        </form>
      </div>
    </>
  );
};

export default Post;
