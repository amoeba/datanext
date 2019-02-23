import Link from "next/link";
import React from "react";
import urlencode from "urlencode";

export default class PackageList extends React.Component {
  render() {
    if (this.props.resourceMaps) {
      return (<ul>
        {this.props.resourceMaps.map((m, i) => {
          return (<li key={i}>
            <Link 
              href={"/package?package=" + urlencode(m) + "&metadata=" + urlencode(this.props.metadata)}
              as={"/package/" + urlencode(m) + "/" + urlencode(this.props.metadata)}>
              <a>{ m }</a>
            </Link>
          </li>);
        })}
      </ul>);
    } else {
      return null;
    }
  }
}
