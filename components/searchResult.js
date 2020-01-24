import Link from 'next/link'

function SearchResult (document) {
  const url = '/view?id=' + encodeURIComponent(document.identifier)

  return <li key={document.identifier}>
      <Link href={url}>
        <a>
          {document.identifier}
        </a>
      </Link>
  </li>
}

export default SearchResult
