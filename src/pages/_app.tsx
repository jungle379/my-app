import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import { useState } from "react";
import { Data } from "../types";
import { Layout } from "../components/Layout";

const DATAS: Data[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

export default function MyApp({ Component, pageProps }: AppProps) {
  const [data, setData] = useState<Data[]>(DATAS);

  return (
    <>
      <Layout dataCount={data.length}>
        <Component {...pageProps} data={data} setData={setData} />
      </Layout>
      <Footer />
    </>
  );
}
