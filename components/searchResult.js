function SearchResult (document) {
  return <li key={document.identifier}>{document.identifier}</li>
}

export default SearchResult
