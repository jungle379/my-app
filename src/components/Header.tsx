import { DataCounter } from "./dataCounter";
import { FC } from "react";

const Header: FC = () => {
  return (
    <>
      <div className="h-[200px]">
        <div className="my-10 text-8xl flex justify-center">"review-app"</div>
      </div>
      <div className="text-4xl py-10 flex justify-center">
        <DataCounter />
      </div>
    </>
  );
};

export default Header;
