import useSWR from "swr";
import { base_url } from "lib/api";

export default function MetadataView({ identifier }) {
  const view_url = base_url + "views/metacatui/" + encodeURIComponent(identifier);
  const viewFetcher = function (url) {
    return fetch(url).then(req => {
      return req.text()
    })
  }

  const { data, error } = useSWR(view_url, viewFetcher);

  if (error) return <div>Failed to load due to {error}.</div>;
  if (!data) return <div className="loading">Loading...</div>;

  return (
    <div
      className="metadata-view"
      dangerouslySetInnerHTML={{ __html: data }}></div >
  );
}
