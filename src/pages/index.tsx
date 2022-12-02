import { useAtom } from "jotai";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ComponentProps } from "react";
import toast, { Toaster } from "react-hot-toast";
import { deleteDatasAtom, toggleDatasAtom } from "../state/todo";

const Home: NextPage = () => {
  const [data, toggleData] = useAtom(toggleDatasAtom);
  const [_, addData] = useAtom(deleteDatasAtom);

  const clickHandler: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    // const id = e.currentTarget.bar.value;
    // addData({
    //   id,
    // });
    toast.success("投稿の削除が完了しました!!");
  };

  return (
    <>
      <Head>
        <title>ホームページ</title>
      </Head>
      <div className="flex justify-between h-[300px]">
        <div>
          <div>
            <h1>投稿一覧</h1>
          </div>
          {data.map((data) => (
            <div key={data.id}>
              <label>
                <input
                  type="checkbox"
                  checked={data.isDone}
                  onChange={() => toggleData({ id: data.id })}
                  className="w-[1.5rem] h-[1.5rem]"
                />
                <Link href={`/posts/${encodeURIComponent(data.id)}`}>
                  {data.title}
                </Link>
              </label>
            </div>
          ))}
        </div>
        <div className="mx-10 my-10 w-[350px] h-[40px]">
          <div className="mx-10 text-20 text-center hover:underline w-[150px] border-2 border-orange-500">
            <Link href="../posts">投稿ページへ</Link>
          </div>
          <form onSubmit={clickHandler}>
            <div className="mt-40">
              <button
                name="bar"
                className="border-4 border-gray-500 w-[200px] h-[50px]"
              >
                削除する
              </button>
              <Toaster position="bottom-right" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
