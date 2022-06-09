import { search } from "../lib/api";
import _ from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useContext } from "react";
import useSWR from "swr";

import SearchResults from "../components/SearchResults";
import SearchLoader from "../components/SearchLoader";
import Omnibar from "../components/Filters/Omnibar";
import ErrorMessage from "../components/ErrorMessage";
import { StoreContext } from "../lib/store";
import { Operation } from "../lib/types";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Search() {
  // Set state from context
  const { query } = useContext(StoreContext);

  // Set query parameters from state
  const router = useRouter();

  // Debounced setQuery
  // TODO: This area needs a refactor, it's messy
  const updateQuery = _.debounce((op) => {
    let newQuery;

    if (op.operation === Operation.SET) {
      const merge = {
        q: {
          [op.field]: op.value,
        },
      };

      newQuery = _.merge(_.clone(query[0]), merge);
      query[1](newQuery);
      router.push("/?q=" + newQuery["q"]["text"], undefined, { shallow: true });
    } else if (op.operation == Operation.UNSET) {
      newQuery = _.clone(query[0]);
      newQuery["q"] = _.omit(newQuery["q"], op.field);
      query[1](newQuery);
    } else {
      console.log("Abort!");
    }
  }, 300);

  // Auth
  const { token } = useContext(StoreContext);

  // Fetch
  const { data, error } = useSWR([search(query[0]), token[0]], (url, token) =>
    fetcher(url, { headers: { Authorization: "Bearer " + token } })
  );

  let content;

  if (error || (data && (!data.response || !data.response.docs)))
    content = <ErrorMessage data={data} error={error} />;
  if (!data) content = <SearchLoader />;
  if (data) content = <SearchResults data={data} />;

  return (
    <div>
      <Head>
        <title>
          Search{query[0]["q"]["text"] ? ": " + query[0]["q"]["text"] : ""}
        </title>
      </Head>
      <Omnibar
        field="text"
        initialState={query[0]["q"]["text"]}
        updateQuery={updateQuery}
      />
      {/* <TextFilter field="text" updateQuery={updateQuery} /> */}
      {/* <TextFilter field="title" updateQuery={updateQuery} /> */}
      {/* <CheckboxFilter field="-obsoletedBy" initialState={true} updateQuery={updateQuery} /> */}
      {content}
    </div>
  );
}
