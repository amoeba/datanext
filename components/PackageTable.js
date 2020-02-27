import React from "react";

function PackageTable({ files }) {
  return (
    <table className="mt-4 mb-4 min-w-full table-auto border-collapse">
      <thead>
        <tr>
          <th className="border-b border-gray-700">Name</th>
          <th className="border-b border-gray-700">Format</th>
          <th className="border-b border-gray-700">Size</th>
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
  );
}

export default PackageTable;
