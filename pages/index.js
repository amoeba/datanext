import { useState } from "react";
import useSWR from "swr";
import Layout from "../components/Layout.js";
import Filters from "../components/Filters.js";
import SearchResults from "../components/SearchResults.js";
import SearchFetcher from "../lib/SearchFetcher.js";

const defaultSearch = "*";

Index.getInitialProps = async () => {
  const data = await SearchFetcher(defaultSearch);

  return { data };
};

function Index(props) {
  const [query, setQuery] = useState(defaultSearch);
  const initialData = props.data;

  const { data } = useSWR(query, SearchFetcher, {
    initialData
  });

  function handleChange(event) {
    console.log(event.target.value);
    setQuery(event.target.value);
  }

  return (
    <Layout>
      <Filters handleChange={handleChange} />
      <p>Current Search: {query}</p>
      <SearchResults data={data} />
    </Layout>
  );
}

export default Index;
