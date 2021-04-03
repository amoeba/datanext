import useSWR from "swr";
import ErrorMessage from "components/ErrorMessage";
import { view } from "lib/api";

const fetcher = async url => {
  const res = await fetch(url)

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')

    error.info = await res.text()
    error.status = res.status

    throw error
  }

  return res.text()
}

export default function MetadataView({ id }) {
  const { data, error } = useSWR(view(id), fetcher);

  if (error) return <ErrorMessage error={error} />
  if (!data) return <div className="loading">Loading...</div>;

  return (
    <div
      className="metadata-view"
      dangerouslySetInnerHTML={{ __html: data }}></div >
  );
}
