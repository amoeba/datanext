import React from "react";
import Layout from "../components/Layout";
import TokenConext from "../shared/TokenContext";

import TokenButton from "../components/TokenButton";

export default class extends React.Component {
  static contextType = TokenConext;

  constructor(props) {
    super(props);

    this.state = {
      loginURL: ""
    };
  }

  componentDidMount() {
    // TODO: Factor out into config
    this.setState({
      loginURL:
        "https://cn.dataone.org/portal/oauth?action=start&target=" +
        encodeURIComponent(window.location.href)
    });
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Profile</h3>
          <p>TODO</p>

          <h3>Token</h3>
          <TokenButton />
          <pre>
            <code>{this.context.token}</code>
          </pre>
        </div>
        <style jsx>{`
          code {
            white-space: pre-wrap;
            word-break: break-all;
          }
        `}</style>
      </Layout>
    );
  }
}
