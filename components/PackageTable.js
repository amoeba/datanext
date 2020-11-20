import PackageTableItem from "./PackageTableItem"

export default function PackageTable({ members }) {
  if (members.length === 0) {
    return <div>This package has no files associated with it. Check the metadata below for links to files that may exist at other locations.</div>
  }

  const rows = members.map(item =>
    PackageTableItem(item)
  );

  return <table className="package">
    <thead>
      <tr>
        <th>Name</th>
        <th>Format</th>
        <th>Size</th>
        <th>Download</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}
