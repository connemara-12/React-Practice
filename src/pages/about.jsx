import Head from "next/head";
import { Footer } from "src/Component/Footer";
import { Header } from "src/Component/Header";
import { Mian } from "src/Component/Main";
import styles from "src/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <Mian page="about" />
      <Footer />
    </div>
  );
}
