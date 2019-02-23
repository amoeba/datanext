import React from "react";
import { withRouter } from 'next/router';
import urlencode from "urlencode";

import CustomHead from '../components/custom_head';
import Header from "../components/header";
import Metadata from "../components/metadata";
import PackageTable from "../components/package_table";

export default withRouter(class extends React.Component {
  render() {
    const {query} = this.props.router;

    return (
      <div>
        <CustomHead>
          <title>Package</title>
        </CustomHead>
        <Header />
        <PackageTable id={urlencode.decode(query.package)} />
        <Metadata id={urlencode.decode(query.metadata)} />
      </div>
    );
  }
});
