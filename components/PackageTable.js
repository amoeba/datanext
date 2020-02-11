import React from "react";

function PackageTable({ files }) {
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
          {files.map((doc, i) => {
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
          border-collapse: collapse;
          margin: 1.5rem 0;
          width: 100%;
        }

        th,
        td {
          border: 1px solid #ccc;
          padding: 0.25rem 0.5rem;
        }

        th {
          background-color: #eee;
        }
      `}</style>
    </div>
  );
}

export default PackageTable;
