import React from "react";

import Header from "../components/header";
import TokenConext from "../shared/token-context";
import TokenButton from "../components/TokenButton";

import "../style.css"

export default class extends React.Component {
  static contextType = TokenConext;

  constructor (props) {
    super(props)

    this.state = {
      loginURL: ''
    }
  }

  componentDidMount () {
    // TODO: Factor out into config
    this.setState({
      loginURL: 'https://search.dataone.org/portal/oauth?action=start&target=' + encodeURIComponent(window.location.href)
    })
  }

  render () {
    return (
      <div>
        <Header />
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
      </div>
    );
  }
}
