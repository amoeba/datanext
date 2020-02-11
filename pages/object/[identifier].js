import React from "react";
import urlencode from "urlencode";
import fetch from "isomorphic-unfetch";

import Layout from "../../components/Layout";
import CustomHead from "../../components/CustomHead";
import Metadata from "../../components/Metadata";
import Citation from "../../components/Citation";

function Object({ doc }) {
  return (
    <Layout>
      <CustomHead>
        <title>Object</title>
      </CustomHead>
      <Citation doc={doc} />
      <Metadata id={doc.identifier} />
    </Layout>
  );
}

Object.getInitialProps = async req => {
  const res = await fetch(
    'https://search.dataone.org/cn/v2/query/solr/?q=id:"' +
      urlencode.decode(req.query.identifier) +
      '"&wt=json'
  );
  const json = await res.json();

  return {
    doc: { ...json.response.docs[0] }
  };
};

export default Object;
