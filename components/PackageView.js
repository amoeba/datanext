import useSWR from "swr";
import PackageFetcher from "../lib/PackageFetcher.js";
import PackageTableRow from "../components/PackageTableRow.js";
const PackageView = props => {
  const { data, pkgerr } = useSWR(props.ore, PackageFetcher);

  if (!data) {
    return <div>Loading...</div>;
  }

  const files = data.response.docs;

  let body;

  if (!data) {
    body = (
      <tr>
        <td colspan="3">Loading...</td>
      </tr>
    );
  } else {
    body = files.map(f => PackageTableRow(f));
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>File</th>
            <th>Format</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>{body}</tbody>
      </table>
      <style jsx>{`
        table {
          border: 1px solid #ccc;
          border-collapse: collapse;
        }

        th {
          margin: 0;
          padding: 0.25rem 0.5rem;
          border-bottom: 1px solid #999;
        }
      `}</style>
    </div>
  );
};

export default PackageView;
