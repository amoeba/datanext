import Link from "next/link";

const SearchResult = document => {
  const url = "/view?id=" + encodeURIComponent(document.identifier);

  return (
    <li key={document.identifier}>
      <Link href={url}>
        <a>
          {document.origin.join(", ")}. <strong>{document.title}</strong>.{" "}
          {document.pubDate}. {document.datasource}.{" "}
          <span className="identifier">{document.identifier}</span>.
        </a>
      </Link>
      <style jsx>{`
        li {
          line-height: 1.25rem;
        }

        a {
          text-decoration: none;
        }

        .identifier {
          border: 1px solid #ccc;
          background-color: rgba(230, 230, 230, 0.25);
          border-radius: 3px;
          padding: 0 3px;
        }

        .identifier:hover {
          background-color: rgba(210, 210, 210, 0.5);
        }
      `}</style>
    </li>
  );
};

export default SearchResult;
