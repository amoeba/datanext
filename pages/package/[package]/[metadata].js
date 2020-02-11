import React from "react";
import { useRouter } from "next/router";
import urlencode from "urlencode";
import fetch from "isomorphic-unfetch";

import Layout from "../../../components/Layout";
import CustomHead from "../../../components/CustomHead";
import Metadata from "../../../components/Metadata";
import PackageTable from "../../../components/PackageTable";
import Citation from "../../../components/DataCitation";

function Package({ doc, files }) {
  const { query } = useRouter();

  return (
    <Layout>
      <CustomHead>
        <title>Package</title>
      </CustomHead>
      <Citation doc={doc} />
      <PackageTable files={files} />
      <Metadata id={query.metadata} />
    </Layout>
  );
}

Package.getInitialProps = async req => {
  // Fetch metadata info
  const res = await fetch(
    'https://search.dataone.org/cn/v2/query/solr/?q=id:"' +
      urlencode.decode(req.query.metadata) +
      '"&wt=json'
  );
  const json = await res.json();

  // Fetch package info
  let pkg_url = "https://search.dataone.org/cn/v2/query/solr/?q=";
  pkg_url += 'resourceMap:"' + urlencode.encode(req.query.package);
  pkg_url += '"+AND+formatType:DATA&wt=json';

  const pkg_res = await fetch(pkg_url);
  const pkg_json = await pkg_res.json();

  return {
    doc: { ...json.response.docs[0] },
    files: pkg_json.response.docs
  };
};

export default Package;