import React from "react";
import { withRouter } from 'next/router';

import CustomHead from '../components/custom_head';
import Header from "../components/header";
import Metadata from "../components/metadata";

export default withRouter(class extends React.Component {
  render() {
    const {query} = this.props.router;

    return (
      <div>
        <CustomHead>
          <title>Object</title>
        </CustomHead>
        <Header />
        <Metadata id={query.object} />
      </div>
    );
  }
});
