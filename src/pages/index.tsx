import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { Data } from "../types";

type Props = {
  data: Data[];
  setdata: Dispatch<SetStateAction<Data[]>>;
};

const Home: NextPage<Props> = ({ data, setdata }) => {
  const toggleIsDone = (id: Data["id"]) => {
    setdata((prevData) => {
      return prevData.map((data) => {
        if (data.id === id) {
          return { ...data, isDone: !data.isDone };
        }
        return data;
      });
    });
  };

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
              onChange={() => toggleIsDone(data.id)}
              className="w-[1.5rem] h-[1.5rem]"
            />
            {data.text}
          </label>
        </div>
      ))}
      <div className="my-20 text-20">
        <Link href="../posts">投稿ページへ</Link>
      </div>
    </>
  );
};

export default Home;
