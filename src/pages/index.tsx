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
      <h1>投稿一覧</h1>
      {data.map((data) => (
        <div key={data.id}>
          <label>
            <input
              type="checkbox"
              checked={data.isDone}
              onChange={() => toggleData({ id: data.id })}
              className="w-[1.5rem] h-[1.5rem]"
            />
            {data.text}
          </label>
        </div>
      ))}
      <div className="my-20 text-20 text-center hover:underline w-[150px] border-2 border-orange-500">
        <Link href="../posts">投稿ページへ</Link>
      </div>
    </>
  );
};

export default Home;
