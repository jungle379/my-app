import { useAtom } from "jotai";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { toggleDatasAtom } from "../state/todo";

const Home: NextPage = () => {
  const [data, toggleData] = useAtom(toggleDatasAtom);
  const clickHandler = () => {
    toast.error("機能未実装です！！");
    // if(data.isDone === true) {
    //   return data,
    // }
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
        <div className="mx-10 my-10 text-20 text-center w-[150px] h-[40px] border-2 border-orange-500">
          <div className="hover:underline">
            <Link href="../posts">投稿ページへ</Link>
          </div>
          <div className="mt-40">
            <button
              onClick={clickHandler}
              className="border-4 border-gray-500 w-[200px] h-[50px]"
            >
              削除する
            </button>
            <Toaster />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
