import React from "react";

import Layout from "../components/Layout";
import CustomHead from "../components/custom_head";
import Search from "../components/search";

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <CustomHead>
          <title>Search</title>
        </CustomHead>
        <Search appData={this.props.appData} />
      </Layout>
    );
  }
}
