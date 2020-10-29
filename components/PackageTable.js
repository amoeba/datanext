export default function PackageTable({ members }) {
  const rows = members.map(member =>
    <tr key={member.identifier}>
      <td>{member.fileName}</td>
      <td>{member.formatId}</td>
      <td>{member.size}</td>
    </tr>)
  return <table className="package">
    <thead>
      <tr>
        <th>Name</th>
        <th>Format</th>
        <th>Size</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}
