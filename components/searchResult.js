import Link from "next/link";

const SearchResult = document => {
  const url = "/view?id=" + encodeURIComponent(document.identifier);

  return (
    <li key={document.identifier}>
      <Link href={url}>
        <a>
          {document.origin.join(", ")}.{" "}
          <span className="title">{document.title}</span>.&nbsp;
          {document.pubDate}. {document.datasource}.{" "}
          <span className="identifier">{document.identifier}</span>.
        </a>
      </Link>
      <style jsx>{`
        li {
          line-height: 1.25rem;
          margin: 0.25rem 0;
        }

        a {
          text-decoration: none;
        }

        .title {
          font-weight: bold;
        }

        .title:hover {
          text-decoration: underline;
        }

        .identifier {
          color: gray;
        }
      `}</style>
    </li>
  );
};

export default SearchResult;
