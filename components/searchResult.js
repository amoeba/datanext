import Link from "next/link";
import React from "react";
import urlencode from "urlencode";

import Citation from "./Citation";

export default class SearchResult extends React.Component {
  render() {
    let items = null;
    const metadata = this.props.doc.id;

    if (this.props.doc.resourceMap && this.props.doc.resourceMap.length > 0) {
      items = this.props.doc.resourceMap.map(m => {
        return (
          <li className="search_result" key={m}>
            <abbr title="Data Package">📦</abbr>
            <Link
              href={
                "/package?package=" +
                urlencode(m) +
                "&metadata=" +
                urlencode(metadata)
              }
              as={"/package/" + urlencode(m) + "/" + urlencode(metadata)}
            >
              <a>
                <Citation doc={this.props.doc} />
              </a>
            </Link>
            {this.props.doc.isPublic ? "" : "🔐"}
            <style jsx>{`
              li {
                margin: 0 0 0.5rem 0;
                line-height: 1.5rem;
              }

              abbr {
                text-decoration: none;
              }
            `}</style>
          </li>
        );
      });
    } else {
      items = (
        <li className="search_result">
          <Link
            href={"/object?object=" + urlencode(metadata)}
            as={"/object/" + urlencode(metadata)}
          >
            <a>
              <Citation doc={this.props.doc} />
            </a>
          </Link>
          {this.props.doc.isPublic ? "" : "🔐"}
          <style jsx>{`
            li {
              margin: 0 0 0.5rem 0;
              line-height: 1.5rem;
            }

            abbr {
              text-decoration: none;
              margin-right: 0.25rem;
              display: inline-block;
            }
          `}</style>
        </li>
      );
    }
    return <div>{items}</div>;
  }
}
