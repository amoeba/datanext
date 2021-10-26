import useSWR from "swr";
import { useContext } from "react";

import ErrorMessage from "./ErrorMessage";
import { view } from "../lib/api";
import { StoreContext } from "../lib/store";

const fetcher = async (url, token) => {
  const res = await fetch(url, { headers: { "Authorization": "Bearer " + token } });

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')

    error.info = await res.text()
    error.status = res.status

    throw error
  }

  return res.text()
}

export default function MetadataView({ id }) {
  const { token } = useContext(StoreContext)
  const { data, error } = useSWR([view(id), token[0]], fetcher);

  if (error) return <ErrorMessage error={error} />
  if (!data) return <div className="loading">Loading...</div>;

  return (
    <div
      className="metadata-view"
      dangerouslySetInnerHTML={{ __html: data }}></div >
  );
}
