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
      <div>
        <h1>投稿内容</h1>
      </div>
      <div>
        {data.map((data) => (
          <div key={data.id}>
            <label>
              {`/posts/${data.id}` === router.asPath ? (
                <div>・{data.text}</div>
              ) : (
                ""
              )}
              {`/posts/${data.id}` === router.asPath && !(data.day === "") ? (
                <div className="font-bold">・投稿日時:{data.day}</div>
              ) : (
                ""
              )}
              {`/posts/${data.id}` === router.asPath && !(data.url === "") ? (
                <div className="font-bold">
                  <a href={data.url} target="_blank" rel="noopener noreferrer">
                    ・外部URL:{data.title}
                  </a>
                </div>
              ) : (
                ""
              )}
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-evenly border-t-2 mt-10">
        <div className="my-10 mx-10 text-2xl border-2 border-orange-500 w-[120px] text-center">
          <Link href="/">ホームへ</Link>
        </div>
        <div className="mx-10 my-10 text-2xl text-center hover:underline w-[180px] border-2 border-orange-500">
          <Link href="../posts">投稿ページへ</Link>
        </div>
      </div>
    </>
  );
};

export default Id;
