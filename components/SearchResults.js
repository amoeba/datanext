import ErrorMessage from "../components/ErrorMessage"
import SearchResult from "../components/SearchResult"

export default function SearchResults({ data }) {
  let content

  try {
    const nFound = data.response.numFound
    const rows = data.response.docs.map((doc, i) =>
      <SearchResult key={doc.id} index={i} doc={doc} />
    );

    content = (
      <div>
        <p>Showing 25 of {nFound} datasets</p>
        {rows}
      </div>
    )
  } catch (e) {
    content = <ErrorMessage error={e} />
  }

  return content
}
