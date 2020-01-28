import Link from "next/link";

const Navigation = function() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Search</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <style jsx>{`
        ul {
          display: flex;
          flex-wrap: row wrap;
          list-style-type: none;
          margin: 0.25rem 0;
          padding: 0.25rem 0;
        }

        li {
          margin-right: 1rem;
        }

        a {
          color: blue;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </ul>
  );
};

export default Navigation;
