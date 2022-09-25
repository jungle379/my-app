import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>home</title>
      </Head>
      <Header />
      <div className="text-blue-800 text-4xl">Hello!</div>
      <div></div>
      <div></div>
      <div></div>
    </>
  );
};

export default Home;
