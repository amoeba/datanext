import Link from "next/link";
import React from "react";
import urlencode from "urlencode";

import PackageList from "../components/package_list.js";

export default class SearchResult extends React.Component {
  render() {
    return (
      <div key={this.props.id}>
        <li>
          <Link
            href={"/object?id=" + urlencode(this.props.doc.id)}
            as={"/object/" + urlencode(this.props.doc.id)}
          >
            <a>{this.props.doc.title} [{this.props.doc.datasource}]</a>
          </Link>
          <PackageList 
            resourceMaps={this.props.doc.resourceMap}
            metadata={this.props.doc.id} />
        </li>
      </div>
    );
  }
}
