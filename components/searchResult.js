import Link from "next/link";
import React from "react";
import urlencode from "urlencode";

export default class SearchResult extends React.Component {
  render() {
    let li = null;
    if (this.props.doc) {
      li = <li key={this.props.id}>
        <Link
          href={"/object?id=" + urlencode(this.props.doc.id)}
          as={"/object/" + urlencode(this.props.doc.id)}
        >
          <a>{this.props.doc.title} [{this.props.doc.datasource}]</a>
        </Link>
      </li>
    } else {
      li = <li key={this.props.id} className="loading">
        Loading
      </li>
    }
    return (
      <div className="search-result">
        {li}
      </div>
    );
  }
}
