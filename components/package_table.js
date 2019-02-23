import React from "react";

export default class SearchResult extends React.Component {
  render() {
    let table = null;

    if (!this.props.data || !this.props.data.response || !this.props.data.response.docs) {
      return table;
    }
    return (<div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Format</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.response.docs.map((doc, i) => {
            return (
              <tr key={i}>
                <td>{doc.fileName || doc.id }</td>
                <td>{doc.formatId}</td>
                <td>{doc.size}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <style jsx>{`
        table {
          cell-spacing: collapse;
          margin-bottom: 0.5rem;
          width: 100%;
        }

        th,
        td {
          border: 1px solid #ccc;
        }

        th {
          background-color: #ccc;
        }
      `}</style>
    </div>);
  }

}





