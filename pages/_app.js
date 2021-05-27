import "bootstrap/dist/css/bootstrap.min.css";
import "../src/css/style.css";

import Head from "next/head";

import Layout from "../src/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Culture Without Borders</title>
        <meta name="description" content="Created by Campo de Gelo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
