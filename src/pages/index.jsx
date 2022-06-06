import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";

const index = () => {
  return (
    <div className={styles.container}>
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
