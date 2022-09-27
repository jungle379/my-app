import { FC, ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
  dataCount: number;
};

export const Layout: FC<Props> = ({ children, dataCount }) => {
  return (
    <>
      <Header dataCount={dataCount} />
      <main>{children}</main>
    </>
  );
};
