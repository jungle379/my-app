import { useAtom } from "jotai";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { datasAtom } from "../../state/todo";

const Id: NextPage = () => {
  const [data] = useAtom(datasAtom);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>投稿内容</title>
      </Head>
      <div className="flex justify-between">
        <div>
          <h1>投稿内容</h1>
        </div>
        <div className="flex">
          <div className="my-10 mx-10 text-2xl border-2 border-orange-500 w-[120px] text-center">
            <Link href="/">ホームへ</Link>
          </div>
          <div className="my-10 text-2xl text-center hover:underline w-[180px] border-2 border-orange-500">
            <Link href="../posts">投稿ページへ</Link>
          </div>
        </div>
      </div>
      <div className="pb-10 border-b-4">
        {data.map((data) => (
          <div key={data.id}>
            {`/posts/${data.id}` === router.asPath ? (
              <div className="my-5">・{data.text}</div>
            ) : null}
            {`/posts/${data.id}` === router.asPath && !(data.day === "") ? (
              <div className="font-bold my-5">・投稿日時:{data.day}</div>
            ) : null}
            {`/posts/${data.id}` === router.asPath && !(data.url === "") ? (
              <div className="my-5 font-bold hover:underline">
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  {data.title}のHPへ
                </a>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
};

export default Id;
