import Link from "next/link";
import React from "react";
import urlencode from "urlencode";

export default class SearchResult extends React.Component {
  // TODO: Refactor using an HOC
  render() {
    if (this.props.doc) {
      return (
        <li key={this.props.id}>
          <Link
            href={"/object?id=" + urlencode(this.props.doc.id)}
            as={"/object/" + urlencode(this.props.doc.id)}
          >
            <a>{this.props.doc.title} [{this.props.doc.datasource}]</a>
          </Link>
        </li>
      );
    } else {
      return (
        <li key={this.props.id} className="loading">
        ...
        </li>
      );
    }
  }
}
