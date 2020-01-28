import React from "react";

import Header from "../components/header";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <p>
            This is just a simple demo of a DataONE search web client written in
            Next.js. See{" "}
            <a href="https://github.com/amoeba/datanext">
              https://github.com/amoeba/datanext
            </a>{" "}
            for more info.
          </p>
        </div>
      </div>
    );
  }
}
