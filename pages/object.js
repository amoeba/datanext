import React from "react";
import { withRouter } from "next/router";

import Layout from "../components/Layout";
import CustomHead from "../components/custom_head";
import Metadata from "../components/metadata";

export default class extends React.Component {
  static getInitialProps({ query: { object } }) {
    return { object: object };
  }

  render() {
    return (
      <Layout>
        <CustomHead>
          <title>Object</title>
        </CustomHead>
        <Metadata id={this.props.object} />
      </Layout>
    );
  }
}
