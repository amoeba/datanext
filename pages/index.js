import useSWR from "swr";
import Layout from "../components/Layout.js";
import SearchResults from "../components/SearchResults.js";
import SearchFetcher from "../lib/SearchFetcher.js";

Index.getInitialProps = async ctx => {
  const data = await SearchFetcher("*");

  return { data };
};
function Index(props) {
  const initialData = props.data;

  const { data } = useSWR("*", SearchFetcher, { initialData });

  return (
    <Layout>
      <SearchResults data={data} />
    </Layout>
  );
}

export default Index;
