import Head from "next/head";
import useSWR from "swr";
import { search } from "lib/api";
import SearchResultLoaders from "../components/SearchResultLoaders";
import SearchResult from "../components/SearchResult"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Index() {
  const { data, error } = useSWR(search(), fetcher)

  if (error) return <div className="error">error</div>
  if (!data) return <SearchResultLoaders n="25" />

  const items = data.response.docs.map((doc) =>
    <SearchResult key={doc.id} doc={doc} />
  );

  return (
    <div>
      <Head>
        <title>Search</title>
      </Head>
      {items}
    </div>
  )
}
