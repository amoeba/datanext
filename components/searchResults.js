import Link from "next/link";
import React from "react";
import urlencode from "urlencode";
import "isomorphic-fetch";
import SearchResult from "../components/searchResult";
import Controls from "../components/controls";

export default class SearchResults extends React.Component {
  render() {
    return (
      <div>
        <p>Found {this.props.docs.length} document(s)</p>
        <ul>
          {this.props.docs.map((doc, i) => {
            return <SearchResult key={i} doc={doc} />;
          })}
        </ul>
      </div>
    );
  }
}
