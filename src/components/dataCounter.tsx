import { useAtom } from "jotai";
import { FC } from "react";
import { datasLengthAtom } from "../state/todo";

export const DataCounter: FC = () => {
  const [datasLength] = useAtom(datasLengthAtom);
  return <h2>投稿: {datasLength}件</h2>;
};
