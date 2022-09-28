import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import { Layout } from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}
