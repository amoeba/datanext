import React from "react";
import "isomorphic-fetch";
import { withRouter } from 'next/router';
import urlencode from "urlencode";

import CustomHead from '../components/custom_head';
import Header from "../components/header";
import Metadata from "../components/metadata";

export default withRouter(class extends React.Component {
  render() {
    return (
      <div>
        <CustomHead>
          <title>Object</title>
        </CustomHead>
        <Header />
        <Metadata id={urlencode.decode(this.props.url.query.id)} />
      </div>
    );
  }
});
