import Head from "next/head";
import { Footer } from "src/Component/Footer";
import { Header } from "src/Component/Header";
import { Mian } from "src/Component/Main";
import styles from "src/styles/Home.module.css";
import { useCallback } from "react";
import { useEffect } from "react";

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Mian page="index" />
      <Footer />
    </div>
  );
}
