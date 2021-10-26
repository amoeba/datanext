import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
import useSWR from "swr";
import { useContext } from "react";

import DebugBox from "../../components/DebugBox";
import ErrorMessage from "../../components/ErrorMessage";
import MetadataView from "../../components/MetadataView";
import Packages from "../../components/Packages";
import { object } from "../../lib/api";
import { StoreContext } from "../../lib/store";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Package() {
  const router = useRouter()
  const { id } = router.query

  // Auth
  const { token } = useContext(StoreContext)

  const { data, error } = useSWR([object(id), token[0]], (url, token) => fetcher(url, { headers: { "Authorization": "Bearer " + token } }));

  if (error) return <ErrorMessage error={error} />
  if (!data) return <div className="loading">loading</div>

  if (data.response.numFound !== 1) {
    const errorMsg = {
      name: "Document not found",
      message: "Nothing was found for id " + id + "."
    }
    return <ErrorMessage error={errorMsg}></ErrorMessage>
  }
  const document = data.response.docs[0]

  return (
    <div>
      <Head>
        <title>{document.title}</title>
        <meta name="description" content={document.abstract} />
      </Head>
      <nav className="breadcrumb">
        <Link href="/"><a>Search</a></Link> ▶ <Link href={"/package/" + encodeURIComponent(id)}><a>{document.title}</a></Link>
      </nav>

      <h2>{document.title}</h2>
      <h3>By {document.origin.join(", ")}</h3>
      <DebugBox title="Packages">
        <Packages ids={document.resourceMap} />
      </DebugBox>
      <DebugBox title="Metadata View">
        <MetadataView
          id={document.identifier} />
      </DebugBox>
    </div>
  )
}
