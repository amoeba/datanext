import React from "react";
import SearchResult from "./SearchResult";
import Loaders from "./../components/Loaders";

export default class SearchResults extends React.Component {
  render() {
    if (!this.props.isLoaded) {
      return <Loaders n={this.props.n} />;
    } else {
      return (
        <div>
          <span>
            {this.props.numFound} result(s) found. Showing{" "}
            {this.props.docs.length}.
          </span>
          <ul>
            {this.props.docs.map((doc, i) => {
              return <SearchResult key={i} doc={doc} />;
            })}
          </ul>
          <style jsx>{`
            ul {
              list-style-type: none;
              margin: 0.5rem 0 0 0;
              padding: 0;
            }

            li {
              margin: 0.25rem;
            }
          `}</style>
        </div>
      );
    }
  }
}
