import useSWR from "swr"
import PackageTableItem from "./PackageTableItem"
import { pkgMembers } from "../lib/api"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function PackageTable({ id }) {
  const { data, error } = useSWR(pkgMembers(id), fetcher)

  if (error) return <div className="error">error</div>
  if (!data) return <div className="loading">loading</div>

  const members = data.response.docs

  if (members.length === 0) {
    return <div>This package has no files associated with it. Check the metadata below for links to files that may exist at other locations.</div>
  }

  const rows = members.map(item =>
    PackageTableItem(item)
  );

  return <div class="package-table-wrapper">
    <table className="package-table">
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
  </div>
}
