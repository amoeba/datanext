import { search } from "../lib/api";
import _ from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useSWR from "swr";

import SearchResultLoaders from "../components/SearchResultLoaders";
import SearchResults from "../components/SearchResults";
import AbstractFilter from "../components/Filters/AbstractFilter";
import ErrorMessage from "../components/ErrorMessage"
import { default_query, to_solr_query } from "../lib/api"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Index() {
  // Bring in query params from URL
  const router = useRouter();
  const { q } = router.query
  const state = default_query;
  if (q) {
    state["q"]["title"] = q
  }

  // Set initial state
  const [query, setQuery] = useState(state)

  // Debounced setQuery
  const updateQuery = _.debounce((value) => {
    setQuery(to_solr_query(value))
  }, 300)

  const { data, error } = useSWR(search(query), fetcher)

  let content

  if (error || (data && (!data.response || !data.response.docs))) content = <ErrorMessage data={data} error={error} />
  if (!data) content = <SearchResultLoaders n="25" />
  if (data) content = <SearchResults data={data} />

  return (
    <div>
      <Head>
        <title>Search</title>
      </Head>
      <div>
        Query is '{to_solr_query(query)}'
      </div>
      <input type="text" placeholder="Filter results" value={query.q?.title} onChange={(e) => { updateQuery({ "q": { "title": e.target.value } }) }} />
      <AbstractFilter query={query} updateQuery={updateQuery} />
      {content}
    </div>
  )
}
