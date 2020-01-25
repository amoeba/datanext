const PackageTableRow = props => {
  return (
    <tr key={props.identifier}>
      <td>{props.fileName || props.identifier}</td>
      <td>{props.formatId}</td>
      <td>{props.size} bytes</td>
      <style jsx>{`
        td {
          margin: 0;
          padding: 0.25rem 0.5rem;
          border-bottom: 1px solid #999;
        }
      `}</style>
    </tr>
  );
};

export default PackageTableRow;
