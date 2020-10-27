import { useRouter } from 'next/router'
import Head from "next/head";
import PackageTable from "components/PackageTable";
import query from "lib/query";

export async function getServerSideProps(context) {
  const url = query({
    "q": 'id:"' + decodeURIComponent(context.query.id) + '"',
    "fl": "id,title,origin,pubDate,resourceMap",
    "rows": 1
  });

  const res = await fetch(url)
  const data = await res.json()

  const doc = data.response.docs[0];

  // Package
  const package_url = query({
    "q": 'resourceMap:"' + doc.resourceMap + '"',
    "fl": "identifier,formatId,size",
    "rows": 1000
  });

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
    </div>
  )
}
