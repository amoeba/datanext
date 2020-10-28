import Head from "next/head";
import PackageTable from "components/PackageTable";
import MetadataView from "components/MetadataView";
import { object, pkg } from "lib/api";

export async function getServerSideProps(context) {
  const url = object(decodeURIComponent(context.query.id));
  const res = await fetch(url)
  const data = await res.json()

  const doc = data.response.docs[0];

  // Package
  const package_url = pkg(doc.resourceMap);
  const package_res = await fetch(package_url);
  const package_data = await package_res.json();

  return {
    props: {
      document: doc,
      members: package_data.response.docs
    }
  };
}

export default function Package({ document, members }) {
  return (
    <div>
      <Head>
        <title>{document.title}</title>
      </Head>
      <h2>{document.title}</h2>
      <h3>By {document.origin.join(", ")}</h3>
      <PackageTable members={members} />
      <MetadataView
        className="metadata-view"
        identifier={document.identifier} />
    </div>
  )
}
