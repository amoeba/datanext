import useSWR from "swr";
import PackageView from "../components/PackageView.js";
import MetadataFetcher from "../lib/MetadataFetcher.js";

const MetadataView = props => {
  const { data, error } = useSWR(props.id, MetadataFetcher);

  if (!data) {
    return <div>Loading...</div>;
  }

  const doc = data.response.docs[0];
  const ore = doc.resourceMap;

  return (
    <div>
      <h2>{doc.title || doc.identifier}</h2>
      <PackageView ore={ore} />
      <p>Abstract: {doc.abstract || "No abstract"}</p>
    </div>
  );
};

export default MetadataView;
