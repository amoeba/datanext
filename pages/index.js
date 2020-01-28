import { useState } from "react";
import useSWR from "swr";
import Layout from "../components/Layout.js";
import Filters from "../components/Filters.js";
import SearchResults from "../components/SearchResults.js";
import SearchFetcher from "../lib/SearchFetcher.js";

Index.getInitialProps = async () => {
  const data = await SearchFetcher("*");

  return { data };
};

function Index(props) {
  const initialData = props.data;
  const [query, setQuery] = useState("*");

  const { data } = useSWR(query, SearchFetcher, {
    initialData
  });

  return (
    <Layout>
      <Filters handleChange={e => setQuery(e.target.value)} />
      <p>Current Search: {query}</p>
      <SearchResults data={data} />
    </Layout>
  );
}

export default Index;
