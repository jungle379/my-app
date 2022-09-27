import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ComponentProps, Dispatch, SetStateAction } from "react";
import { Data } from "../../types";

type Props = {
  setData: Dispatch<SetStateAction<Data[]>>;
};

const Post: NextPage<Props> = ({ setData }) => {
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    const text = e.currentTarget.text.value;
    setData((prevData) => {
      const newData = { id: prevData.length + 1, text, isDone: false };
      return [...prevData, newData];
    });
    e.currentTarget.reset();
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
