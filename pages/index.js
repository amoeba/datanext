import React from "react";

import CustomHead from '../components/custom_head';
import Header from "../components/header";
import Search from "../components/search";

export default class extends React.Component {
  render() {
    return (
      <div>
        <CustomHead>
          <title>Search</title>
        </CustomHead>
        <Header />
        <Search />
      </div>
    );
  }
}
