import Header from "./Header.js";

function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
