import React from "react";
import urlencode from "urlencode";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import CustomHead from "../components/custom_head";
import Metadata from "../components/metadata";
import PackageTable from "../components/package_table";

function Package({ files }) {
  return (
    <Layout>
      <CustomHead>
        <title>Package</title>
      </CustomHead>
      <PackageTable files={files} />
      {/* <Metadata id={this.props.metadata} /> */}
    </Layout>
  );
}

Package.getInitialProps = async req => {
  console.log(req);

  let pkg_url = "https://search.dataone.org/cn/v2/query/solr/?q=";
  pkg_url += 'resourceMap:"' + urlencode.encode(req.query.package);
  pkg_url += '"+AND+formatType:DATA&wt=json';
  const pkg_res = await fetch(pkg_url);
  const pkg_json = await pkg_res.json();

  return {
    files: pkg_json.response.docs
  };
};

export default Package;
