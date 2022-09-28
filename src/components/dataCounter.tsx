import { useAtom } from "jotai";
import { FC } from "react";
import { datasAtom } from "../state/todo";

type Props = {
  dataCount: number;
};

export const DataCounter: FC = () => {
  const [data] = useAtom(datasAtom);
  return <h2>Data: {data.length}件</h2>;
};
