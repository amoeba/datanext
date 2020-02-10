import React from "react";

export default class PackageTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: this.props.files
    };
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Format</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {this.state.files.map((doc, i) => {
              return (
                <tr key={i}>
                  <td>{doc.fileName || doc.id}</td>
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
      </div>
    );
  }
}
