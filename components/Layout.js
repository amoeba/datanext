import Header from "../components/Header.js";

export default function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <style jsx>{`
        div {
          font: 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
        }
      `}</style>
    </div>
  );
}
