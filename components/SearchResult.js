import Link from "next/link";

export default function SearchResult({ index, doc }) {
  const radius = 30

  const zebra = index % 2 ? "search-result-even" : "search-resultodd"

  return <div className={"search-result " + zebra}>
    <div className="search-result-icon">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={radius * 2} height={radius * 2} viewBox={"0 0 " + radius * 2 + " " + radius * 2}>
        <circle r="50%" cx="50%" cy="50%" fill="rgba(200, 200, 200, 0.75)" />
      </svg>
    </div>
    <div className="search-result-text">
      <Link href={"/package/" + encodeURIComponent(doc.id)}>
        <a>{doc.origin.join(", ")}. {doc.pubDate.substr(0, 4)}. <span className="search-result-text-title">{doc.title}</span>. {doc.datasource}. <span className="search-result-text-identifier">{doc.id}</span></a>
      </Link>
      {!doc.isPublic ? "🔐" : ""}
    </div>
  </div>
}
