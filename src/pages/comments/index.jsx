import Head from "next/head";
import { ComponentComments } from "src/components/Comments";
import { Header } from "src/components/Header";

const Comments = () => {
  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <Header />
      <ComponentComments />
    </div>
  );
};

export default Comments;
