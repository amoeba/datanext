import React from "react";
import { withRouter } from 'next/router';

import CustomHead from '../components/custom_head';
import Header from "../components/header";
import Metadata from "../components/metadata";

export default withRouter(class extends React.Component {
  constructor (props) {
    super(props);

    console.log("object instantited with props", this.props);
  }

  static async getInitialProps({ query }) {
    return { object: query.object }
  }

  render() {
    const {query} = this.props.router;

    return (
      <div>
        <CustomHead>
          <title>Object</title>
        </CustomHead>
        <Header />
        <Metadata id={this.props.object} />
      </div>
    );
  }
});
