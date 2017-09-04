import Link from "next/link";
import React from "react";
import urlencode from "urlencode";
import "isomorphic-fetch";
import Header from "../components/header";

export default class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      docs: []
    };
  }

  async componentDidMount() {
    const res = await fetch(
      "https://cn.dataone.org/cn/v2/query/solr/?q=id:arctic*+AND+formatType:METADATA&rows=5&wt=json"
    );
    const json = await res.json();

    this.setState({ loaded: true, docs: json.response.docs });
  }

  render() {
    return (
      <div>
        <Header />
        <p>Found {this.state.docs.length} document(s)</p>
        <ul>
          {this.state.docs.map((doc, i) => {
            return (
              <li key={i}>
                <Link
                  href={"/object?id=" + urlencode(doc.id)}
                  as={"/object/" + urlencode(doc.id)}
                >
                  <a>{doc.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
