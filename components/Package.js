import useSWR from "swr"
import PackageTable from "../components/PackageTable"
import { object } from "../lib/api"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Package({ id }) {
  const { data, error } = useSWR(object(id), fetcher)

  if (error) return <div className="error">error</div>
  if (!data) return <div className="loading">loading</div>

  // Don't show obsolete packages
  if (data.response.docs[0].obsoletedBy) return <div>obsolete</div>

  return <div>{id}
    <PackageTable id={id} /></div>
}
