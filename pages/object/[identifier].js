import React from "react";
import { useRouter } from "next/router";
import urlencode from "urlencode";
import fetch from "isomorphic-unfetch";

import Layout from "../../components/Layout";
import CustomHead from "../../components/CustomHead";
import Metadata from "../../components/Metadata";
import Citation from "../../components/Citation";

function Object({ doc }) {
  const { query } = useRouter();

  return (
    <Layout>
      <CustomHead>
        <title>{doc.title}</title>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Dataset",
            name: doc.title,
            description: doc.abstract,
            url:
              "https://dataone.org/datasets/" +
              urlencode.encode(query.package) +
              "/" +
              urlencode.encode(query.metadata)
          })}
          )}
        </script>
      </CustomHead>
      <div className="p-2">
        <Citation doc={doc} />
      </div>
      <div className="p-2">
        <Metadata id={doc.identifier} />
      </div>
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
