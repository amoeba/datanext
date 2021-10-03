import { search } from "../lib/api";
import _ from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import useSWR from "swr";

import SearchResultLoaders from "../components/SearchResultLoaders";
import SearchResults from "../components/SearchResults";
import TitleFilter from "../components/Filters/TitleFilter";
import AbstractFilter from "../components/Filters/AbstractFilter";
import YearFilter from "../components/Filters/YearFilter";
import TextFilter from "../components/Filters/TextFilter";
import ErrorMessage from "../components/ErrorMessage"
import { default_query, to_solr_query_params } from "../lib/api"
import { StoreContext } from "../lib/store";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Search() {
  // Set initial state
  const [query, setQuery] = useState(default_query())

  // Debounced setQuery
  const updateQuery = _.debounce((value) => {
    setQuery(_.merge(_.clone(query), value))
  }, 300)

  // Auth
  const { token } = useContext(StoreContext)

  // Fetch
  const { data, error } = useSWR([search(query), token[0]], (url, token) => fetcher(url, { headers: { "Authorization": "Bearer " + token } }))

  let content

  if (error || (data && (!data.response || !data.response.docs))) content = <ErrorMessage data={data} error={error} />
  if (!data) content = <SearchResultLoaders n="25" />
  if (data) content = <SearchResults data={data} />

  return (
    <div>
      <Head>
        <title>Search</title>
      </Head>
      <TextFilter query={query} updateQuery={updateQuery} />
      {/* <TitleFilter query={query} updateQuery={updateQuery} />
      <AbstractFilter query={query} updateQuery={updateQuery} />
      <YearFilter query={query} updateQuery={updateQuery} /> */}
      {content}
    </div>
  )
}
