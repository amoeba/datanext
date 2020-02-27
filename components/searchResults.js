import SearchResult from "./SearchResult";
import Loaders from "./Loaders";

function SearchResults(props) {
  if (!props.isLoaded) {
    return <Loaders n={props.n} />;
  } else {
    return (
      <div>
        <span className="block mb-4 text-sm">
          {props.numFound} result(s) found. Showing {props.docs.length}.
        </span>
        <ul>
          {props.docs.map((doc, i) => {
            return <SearchResult key={i} doc={doc} />;
          })}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
