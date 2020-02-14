import Link from "next/link";
import React from "react";
import urlencode from "urlencode";

import Citation from "./Citation";

export default class SearchResult extends React.Component {
  render() {
    let items = null;
    const metadata = this.props.doc.id;

    if (this.props.doc.resourceMap && this.props.doc.resourceMap.length > 0) {
      items = this.props.doc.resourceMap.map(map => {
        return (
          <li key={map}>
            <Link
              href={"/package/[package]/[metadata]"}
              as={"/package/" + urlencode(map) + "/" + urlencode(metadata)}
            >
              <a>
                <Citation doc={this.props.doc} />
              </a>
            </Link>
            {this.props.doc.isPublic ? "" : "🔐"}
            <style jsx>{`
              li {
                margin: 0.25rem 0;
                padding: 0.25rem 0;
                line-height: 1.5rem;
                word-break: break-all;
                border-bottom: 1px solid #ccc;
              }
            `}</style>
          </li>
        );
      });
    } else {
      items = (
        <li>
          <Link
            href={"/object/[identifier]"}
            as={"/object/" + urlencode(metadata)}
          >
            <a>
              <Citation doc={this.props.doc} />
            </a>
          </Link>
          {this.props.doc.isPublic ? "" : "🔐"}
          <style jsx>{`
            li {
              margin: 0.25rem 0;
              padding: 0.25rem 0;
              line-height: 1.5rem;
              word-break: break-all;
              border-bottom: 1px solid #ccc;
            }
          `}</style>
        </li>
      );
    }

    return (
      <div>
        {items}
        <style jsx>{`
          a,
          a:visited {
            text-decoration: underline;
          }
        `}</style>
      </div>
    );
  }
}
