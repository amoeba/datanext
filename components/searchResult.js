import Link from "next/link";
import React from "react";
import urlencode from "urlencode";

import DataCitation from "./data_citation";

export default class SearchResult extends React.Component {
  render() {
    let items = null;
    const metadata = this.props.doc.id;

    if (this.props.doc.resourceMap && this.props.doc.resourceMap.length > 0) {
      items = this.props.doc.resourceMap.map(m => {
        return (<li className="search_result" key={m}>
          <abbr title="Data Package">📦</abbr>
        <Link
          href={'/package?package=' + urlencode(m) + '&metadata=' + urlencode(metadata)}
          as={'/package/' + urlencode(m)}
        >
          <a>
            <DataCitation pid={metadata} doc={this.props.doc}/>
          </a>
        </Link>
        <style jsx>{`
          li {
            margin: 0 0 0.5rem 0;
            line-height: 1.5rem;
          }
        `}</style>
        </li>);
      });
    } else {
      items = (<li className="search_result">
        <abbr title="Metadata Only">📀</abbr>
        <Link
          href={"/object?id=" + urlencode(metadata)}
          as={"/object/" + urlencode(metadata)}
        >
          <a>
          <DataCitation pid={metadata} doc={this.props.doc}/>
          </a>
        </Link>
        <style jsx>{`
          li {
            margin: 0 0 0.5rem 0;
            line-height: 1.5rem;
          }
        `}</style>
      </li>);
    }
    return (<div>
      { items }
    </div>);
  }
}
