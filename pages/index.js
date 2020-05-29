import fetch from "isomorphic-unfetch";

import Layout from "../components/Layout";
import CustomHead from "../components/CustomHead";
import Search from "../components/search";

function Index({ docs, numFound }) {
  return (
    <Layout>
      <CustomHead>
        <title>Search</title>
      </CustomHead>
      <Search docs={docs} numFound={numFound} />
    </Layout>
  );
}

Index.getInitialProps = async req => {
  const url =
    "https://search.dataone.org/cn/v2/query/solr/?q=formatType:METADATA+AND+-obsoletedBy:*&wt=json";

  const res = await fetch(url);
  const json = await res.json();

  return { docs: json.response.docs, numFound: json.response.numFound };
};

export default Index;
