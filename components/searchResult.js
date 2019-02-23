import Link from "next/link";
import React from "react";
import urlencode from "urlencode";

export default class SearchResult extends React.Component {
  render() {
    let items = null;
    const metadata = this.props.doc.id;

    if (this.props.doc.resourceMap && this.props.doc.resourceMap.length > 0) {
      items = this.props.doc.resourceMap.map(m => {
        return (<li key={m}>
          <abbr title="Data Package">📦</abbr>
        <Link
          href={'/package?package=' + urlencode(m) + '&metadata=' + urlencode(metadata)}
          as={'/package/' + urlencode(m)}
        >
          <a>{this.props.doc.origin.join(', ')}. {new Date(this.props.doc.pubDate).getFullYear()}. {this.props.doc.title}. {this.props.doc.datasource}. {metadata}.</a>
        </Link>
        </li>);
      });
    } else {
      items = (<li>
        <abbr title="Metadata Only">📀</abbr>
        <Link
          href={"/object?id=" + urlencode(metadata)}
          as={"/object/" + urlencode(metadata)}
        >
          <a>{this.props.doc.origin.join(', ')}. {new Date(this.props.doc.pubDate).getFullYear()}. {this.props.doc.title}. {this.props.doc.datasource}. {metadata}.</a>
        </Link>
      </li>);
    }
    return (<div>
      { items }
    </div>);
  }
}
