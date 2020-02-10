import React from "react";
import SearchResult from "../components/searchResult";

export default class SearchResults extends React.Component {
  render() {
    if (!this.props.isLoaded) {
      const loaders = [...Array(this.props.n)].map((x, i) => i);

      return (
        <div>
          <span>Loading at most {this.props.n} results. Hang on tight...</span>
          <ul>
            {loaders.map(i => {
              return (
                <li className="loading" key={i}>
                  &nbsp;
                </li>
              );
            })}
          </ul>
          <style jsx>{`
            ul {
              list-style-type: none;
              margin: 0.5rem 0 0 0;
              padding: 0;
            }

            li {
              background-color: #eee;
              height: 1.5rem;
              margin: 0.25rem;
            }
          `}</style>
        </div>
      );
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
