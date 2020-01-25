import SearchResult from "../components/SearchResult.js";

const SearchResults = props => {
  return (
    <div>
      <h2>Results</h2>
      <ul>{props.data.response.docs.map(d => SearchResult(d))}</ul>
    </div>
  );
};

export default SearchResults;
