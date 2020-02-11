import Head from "next/head";

function CustomHead({ children }) {
  return (
    <Head>
      {children}
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link rel="preconnect" href="https://search.dataone.org" />
      <link rel="preconnect" href="https://cn.dataone.org" />
    </Head>
  );
}

export default CustomHead;
