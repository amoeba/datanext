import SearchResult from "../components/SearchResult.js";

const SearchResults = props => {
  return (
    <div>
      <h2>Results</h2>
      <ul>{props.data.map(d => SearchResult(d))}</ul>
      <style jsx>{`
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default SearchResults;
