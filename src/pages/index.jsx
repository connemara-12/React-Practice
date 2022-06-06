import Head from "next/head";
import { Header } from "src/components/Header";

const index = () => {
  return (
    <div>
      <Head>
        <title>index Page</title>
      </Head>
      <Header />
      <h1>Next,jsで学ぶReact講座</h1>
      <p> JSONPlaceholderのAPIをいろいろ叩いてみるよ!</p>
    </div>
  );
};

export default index;
