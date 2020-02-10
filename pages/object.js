import React from "react";

import Layout from "../components/Layout";
import CustomHead from "../components/CustomHead";
import Metadata from "../components/Metadata";

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
