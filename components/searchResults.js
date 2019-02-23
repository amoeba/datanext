import React from "react";
import SearchResult from "../components/searchResult";

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
