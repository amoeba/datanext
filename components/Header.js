import Link from "next/link";
import Navigation from "../components/Navigation.js";

const Header = () => {
  return (
    <div>
      <h1>
        <Link href="/">
          <a>datanext</a>
        </Link>
      </h1>
      <Navigation />
      <style jsx>{`
        a {
          color: black;
          text-decoration: none;
        }

        h1 {
          margin: 0 0 0.5rem 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default Header;
