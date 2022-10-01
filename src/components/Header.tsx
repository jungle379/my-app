import { DataCounter } from "./dataCounter";
import { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  return (
    <>
      <div className="h-[200px]">
        <div className="my-10 text-8xl flex justify-center">"my-app"</div>
      </div>
      <div className="text-4xl py-10 flex justify-center">
        <DataCounter />
      </div>
    </>
  );
};

export default Header;
