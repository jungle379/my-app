import { useAtom } from "jotai";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { toggleDatasAtom } from "../state/todo";

const Home: NextPage = () => {
  const [data, toggleData] = useAtom(toggleDatasAtom);

  return (
    <>
      <Head>
        <title>ホーム</title>
      </Head>
      <div className="flex justify-between">
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
          {/* <div className="mt-40">
            <button className="border-4 border-gray-500 w-[200px] h-[50px]">
              削除する
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
