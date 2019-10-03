import React from "react";

import CustomHead from '../components/custom_head';
import Header from "../components/header";
import Search from "../components/search";

import "../style.css"

export default class extends React.Component {
  render() {
    return (
      <div>
        <CustomHead>
          <title>Search</title>
        </CustomHead>
        <Header />
        <Search
          appData={this.props.appData} />
      </div>
    );
  }
}
