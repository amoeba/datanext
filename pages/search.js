import Head from "next/head";
import useSWR from "swr";
import { search } from "lib/api";
import SearchResultLoaders from "../components/SearchResultLoaders";
import SearchResults from "../components/SearchResults"
import React, { useState } from "react"
import _ from "lodash"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Index() {
  const [query, setQuery] = useState("*")

  // Debounced setQuery
  const updateQuery = _.debounce((e) => {
    setQuery(e.target.value)
  }, 300)

  const { data, error } = useSWR(search(query), fetcher)

  let content

  if (error) content = <ErrorMessage error={error} />
  if (!data) content = <SearchResultLoaders n="25" />
  if (data) content = <SearchResults data={data} />

  return (
    <div>
      <Head>
        <title>Search</title>
      </Head>
      <input type="text" placeholder="Filter results" onChange={updateQuery} />
      {content}
    </div>
  )
}
