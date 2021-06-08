import Head from "next/head";
import QuickSearch from "../components/QuickSearch";

export default function Index() {

  return (
    <div>
      <Head>
        <title>DataONE</title>
      </Head>
      <h1>Welcome to DataONE!</h1>
      <QuickSearch />
    </div>
  )
}
