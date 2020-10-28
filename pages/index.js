import Link from "next/link";
import Head from "next/head";
import { query } from "lib/api";

export async function getServerSideProps(context) {
  const url = query({
    "q": "*+AND+resourceMap:*+AND+-obsoletedBy:*+AND+formatType:METADATA",
    "fl": "id,title,origin,pubDate,publisher",
    "sort": "dateUploaded+desc",
    "rows": 25
  });
  const res = await fetch(url)
  const data = await res.json()

  return {
    props: {
      results: data.response.docs
    }
  };
}

export default function Index({ results }) {
  const items = results.map((item) =>
    <div key={item.id}>
      <p><Link href={"/package/" + encodeURIComponent(item.id)}><a><strong>{item.title}</strong>. <br />By {item.origin.join(", ")}</a></Link></p>
    </div >
  );

  return (
    <div>
      <Head>
        <title>Search</title>
      </Head>
      {items}
    </div>
  )
}
