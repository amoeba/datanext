import Link from "next/link";
import React from "react";
import urlencode from "urlencode";

import Citation from "./Citation";

export default class SearchResult extends React.Component {
  render() {
    let items = null;
    const metadata = this.props.doc.id;

    if (this.props.doc.resourceMap && this.props.doc.resourceMap.length > 0) {
      return this.props.doc.resourceMap.map(map => {
        return (
          <li
            key={map}
            className="pt-2 pb-1 border-b border-solid border-black-500"
          >
            <Link
              href={"/package/[package]/[metadata]"}
              as={"/package/" + urlencode(map) + "/" + urlencode(metadata)}
            >
              <a>
                <Citation doc={this.props.doc} />
              </a>
            </Link>
            {this.props.doc.isPublic ? "" : "🔐"}
          </li>
        );
      });
    } else {
      return (
        <li className="pt-2 pb-1 border-b border-solid border-black-500">
          <Link
            href={"/object/[identifier]"}
            as={"/object/" + urlencode(metadata)}
          >
            <a>
              <Citation doc={this.props.doc} />
            </a>
          </Link>
          {this.props.doc.isPublic ? "" : "🔐"}
        </li>
      );
    }
  }
}
