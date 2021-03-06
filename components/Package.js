import useSWR from "swr"
import PackageTable from "../components/PackageTable"
import DebugBox from "../components/DebugBox"
import { object } from "../lib/api"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Package({ id }) {
  const { data, error } = useSWR(object(id), fetcher)

  if (error) return <div className="error">error</div>
  if (!data) return <div className="loading">loading</div>

  // Show not found
  if (data.response.docs.length === 0) return <div>Package {id} not found</div>

  // Don't show obsolete packages
  if (data.response.docs[0].obsoletedBy) return <div>Package is obsolete</div>

  return <div className="package">
    <DebugBox title={"Package " + id}>
      <PackageTable id={id} />
    </DebugBox>
  </div>
}
