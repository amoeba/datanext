import Link from "next/link";
import Head from "next/head";
import useSWR from "swr";
import { search } from "lib/api";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Index() {
  const { data, error } = useSWR(search(), fetcher)

  if (error) return <div className="error">error</div>
  if (!data) return <div className="loading">loading</div>

  const items = data.response.docs.map((item) =>
    <div key={item.id}>
      <p>
        <Link href={"/package/" + encodeURIComponent(item.id)}>
          <a><strong>{item.title}</strong>. <br />By {item.origin.join(", ")}</a>
        </Link>
      </p>
    </div>
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
