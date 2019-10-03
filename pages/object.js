import React from "react";
import { withRouter } from 'next/router';

import CustomHead from '../components/custom_head';
import Header from "../components/header";
import Metadata from "../components/metadata";

import "../style.css"

export default class extends React.Component {
  static getInitialProps ({ query: { object } }) {
    return { object: object }
  }

  render() {
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
};
