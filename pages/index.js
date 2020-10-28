import { useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import Head from "next/head";
import { search } from "lib/api";

export async function getServerSideProps(context) {
  const url = search();
  const res = await fetch(url)
  const data = await res.json()

  return {
    props: {
      results: data.response.docs
    }
  };
}

export default function Index({ results }) {
  const [queryString, changeQueryString] = useState("*");
  const url = search(queryString);
  const viewFetcher = function (url) {
    return fetch(url).then(req => {
      return req.json()
    })
  }
  const { data, error } = useSWR(url, viewFetcher);
  const docs = data ? data.response.docs : results;
  const items = docs.map((item) =>
    <div key={item.id}>
      <p>
        <Link href={"/package/" + encodeURIComponent(item.id)}>
          <a><strong>{item.title}</strong>. <br />By {item.origin.join(", ")}</a>
        </Link>
      </p>
    </div >
  );

  return (
    <div>
      <Head>
        <title>Search</title>
      </Head>
      <p><input
        type="text"
        placeholder="Enter a search term..."
        onBlur={(e) => changeQueryString(e.target.value)} /></p>
      {items}
    </div>
  )
}
