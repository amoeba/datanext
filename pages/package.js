import React from "react";
import urlencode from "urlencode";
import Layout from "../components/Layout";
import CustomHead from "../components/custom_head";
import Metadata from "../components/metadata";
import PackageTable from "../components/package_table";

export default class extends React.Component {
  static getInitialProps({ query }) {
    return {
      package: urlencode.decode(query.package),
      metadata: urlencode.decode(query.metadata)
    };
  }

  render() {
    return (
      <Layout>
        <CustomHead>
          <title>Package</title>
        </CustomHead>
        <PackageTable id={this.props.package} />
        <Metadata id={this.props.metadata} />
      </Layout>
    );
  }
}
