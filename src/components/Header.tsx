import { DataCounter } from "./dataCounter";
import { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  return (
    <>
      <div className="h-[200px]">
        <div className="text-4xl">my-app</div>
      </div>
      <Link href="/">一覧</Link>
      <Link href="/posts">追加</Link>
    </>
  );
};

export default Header;
