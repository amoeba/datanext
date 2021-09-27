import Link from "next/link";

export default function SearchResult({ doc }) {
  const radius = 30

  return <div className="search-result">
    <div className="search-result-icon">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={radius * 2} height={radius * 2} viewBox={"0 0 " + radius * 2 + " " + radius * 2}>
        <circle r="50%" cx="50%" cy="50%" fill="rgba(200, 200, 200, 0.75)" />
      </svg>
    </div>
    <div className="search-result-text">
      <Link href={"/package/" + encodeURIComponent(doc.id)}>
        <a><strong>{doc.title}</strong>. <br />By {doc.origin.join(", ")}</a>
      </Link>
      {!doc.isPublic ? "🔐" : ""}
    </div>
  </div>
}
