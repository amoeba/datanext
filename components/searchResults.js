import React from "react";
import SearchResult from "../components/searchResult";

export default class SearchResults extends React.Component {
  render() {
    if (!this.props.isLoaded) {
      return("Loading...");
    }

    return (
      <div id="search-results">

        <span>{this.props.numFound} result(s) found. Showing {this.props.docs.length}</span>
        <ul>
          {this.props.docs.map((doc, i) => {
            return (
              <SearchResult
                key={i}
                doc={doc} />
            );
          })}
        </ul>
      </div>
    );
  }
}
