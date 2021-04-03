import Head from "next/head";
import { useRouter } from 'next/router'
import useSWR from "swr"
import Packages from "components/Packages";
import MetadataView from "components/MetadataView";
import { object } from "lib/api";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Package() {
  const router = useRouter()
  const { id } = router.query

  const { data, error } = useSWR(object(id), fetcher)

  if (error) return <div className="error">error</div>
  if (!data) return <div className="loading">loading</div>

  const document = data.response.docs[0]

  return (
    <div>
      <Head>
        <title>{document.title}</title>
      </Head>
      <h2>{document.title}</h2>
      <h3>By {document.origin.join(", ")}</h3>
      <Packages ids={document.resourceMap} />
      <MetadataView
        className="metadata-view"
        identifier={document.identifier} />
    </div>
  )
}
