import { DataCounter } from "./dataCounter";
import { FC } from "react";
import Link from "next/link";

type Props = {
  dataCount: number;
};

const Header: FC<Props> = ({ dataCount }) => {
  return (
    <>
      <div className="h-[200px]">
        <div className="text-4xl">my-app</div>
      </div>
      <Link href="/">一覧</Link>
      <Link href="/posts">追加</Link>

      <DataCounter dataCount={dataCount} />
    </>
  );
};

export default Header;
