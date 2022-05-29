import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/Component/Footer";
import { Header } from "src/Component/Header";
import { Mian } from "src/Component/Main";
import { useCounter } from "src/hooks/useCounter";
import { useInputarray } from "src/hooks/useInputarray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputarray();
  useBgLightBlue();
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Mian page="about" />
      <Footer />
    </div>
  );
}
