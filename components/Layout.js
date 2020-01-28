import Head from "next/head";
import Header from "../components/Header.js";

const Layout = props => {
  return (
    <div id="app">
      <Head>
        <title>datanext</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {props.children}
      <style jsx>{`
        #app {
          font: 16px sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Layout;
