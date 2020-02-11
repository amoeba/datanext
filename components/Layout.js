import Header from "./Header.js";

function Layout(props) {
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

export default Layout;
