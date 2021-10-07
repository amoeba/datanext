import { search } from "../lib/api";
import _ from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import useSWR from "swr";

import SearchResults from "../components/SearchResults";
import SearchLoader from "../components/SearchLoader";
import TextFilter from "../components/Filters/TextFilter";
import CheckboxFilter from "../components/Filters/CheckboxFilter";
import ErrorMessage from "../components/ErrorMessage"
import { default_query, to_solr_query_params } from "../lib/api"
import { StoreContext } from "../lib/store";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Search() {
  // Set initial state
  const [query, setQuery] = useState(default_query())

  // Debounced setQuery
  const updateQuery = _.debounce((op) => {
    if (op.operation === "set") {
      const merge = {
        "q": {
          [op.field]: op.value
        }
      }

      setQuery(_.merge(_.clone(query), merge));
    } else if (op.operation == "unset") {
      let newQuery = _.clone(query);
      newQuery["q"] = _.omit(newQuery["q"], op.field);

      setQuery(newQuery);
    } else {
      console.log("Abort!")
    }

  }, 300)

  // Auth
  const { token } = useContext(StoreContext)

  // Fetch
  const { data, error } = useSWR([search(query), token[0]], (url, token) => fetcher(url, { headers: { "Authorization": "Bearer " + token } }))
  let content

  if (error || (data && (!data.response || !data.response.docs))) content = <ErrorMessage data={data} error={error} />
  if (!data) content = <SearchLoader />
  if (data) content = <SearchResults data={data} />

  return (
    <div>
      <Head>
        <title>Search</title>
      </Head>
      <TextFilter field="text" updateQuery={updateQuery} />
      <TextFilter field="title" updateQuery={updateQuery} />
      <CheckboxFilter field="-obsoletedBy" updateQuery={updateQuery} />
      {content}
    </div>
  )
}
