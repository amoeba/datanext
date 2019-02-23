import Link from "next/link";
import React from "react";
import urlencode from "urlencode";
import SearchResult from "../components/searchResult";
import Controls from "../components/controls";

export default class SearchResults extends React.Component {
  render() {
    return (
      <div id="search-results">
        <ul>
          {this.props.docs.map((doc, i) => {
            return <SearchResult key={i} doc={doc} />;
          })}
        </ul>
      </div>
    );
  }
}
