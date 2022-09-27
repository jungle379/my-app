import { FC } from "react";

type Props = {
  dataCount: number;
};

export const DataCounter: FC<Props> = ({ dataCount }) => {
  return <h2>Data: {dataCount}件</h2>;
};
