import SearchResult from '../components/SearchResult.js'

function SearchResults(props) {
  return <div>
    <ul>
      { props.data.response.docs.map(d => SearchResult(d)) }
    </ul>
  </div>
}

export default SearchResults