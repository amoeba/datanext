import SearchResult from "./SearchResult";
import Loaders from "./../components/Loaders";

function SearchResults(props) {
  if (!props.isLoaded) {
    return <Loaders n={props.n} />;
  } else {
    return (
      <div>
        <span>
          {props.numFound} result(s) found. Showing {props.docs.length}.
        </span>
        <ul>
          {props.docs.map((doc, i) => {
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

export default SearchResults;
