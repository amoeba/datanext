import React from "react";
import Layout from "../components/Layout";

export default class extends React.Component {
  render() {
    return (
      <Layout>
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
      </Layout>
    );
  }
}
