import { useAtom } from "jotai";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { datasAtom } from "../../state/todo";

const Id: NextPage = () => {
  const [data] = useAtom(datasAtom);
  return (
    <>
      <Head>
        <title>コメント一覧</title>
      </Head>
      <div>
        {data.map((data) => (
          <div key={data.id}>
            <label>
              {data.text}
              <br />
              {data.day}
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="my-10 mx-10 text-2xl border-2 border-orange-500 w-[120px] text-center">
          <Link href="/">Topへ</Link>
        </div>
        <div className="mx-10 my-10 text-2xl text-center hover:underline w-[150px] h-[40px] border-2 border-orange-500">
          <Link href="../posts">投稿ページへ</Link>
        </div>
      </div>
    </>
  );
};

export default Id;
