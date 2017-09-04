import Link from "next/link";
import React from "react";
import urlencode from "urlencode";

export default class SearchResult extends React.Component {
  render() {
    return (
      <div>
        <li key={this.props.id}>
          <Link
            href={"/object?id=" + urlencode(this.props.doc.id)}
            as={"/object/" + urlencode(this.props.doc.id)}
          >
            <a>{this.props.doc.title}</a>
          </Link>
        </li>
      </div>
    );
  }
}
