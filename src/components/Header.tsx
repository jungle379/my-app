import { DataCounter } from "./dataCounter";
import { FC } from "react";

type Props = {
  dataCount: number;
};

const Header: FC<Props> = ({ dataCount }) => {
  return (
    <>
      <div className="h-[200px]">
        <div className="text-4xl">my-app</div>
      </div>
      <DataCounter dataCount={dataCount} />
    </>
  );
};

export default Header;
