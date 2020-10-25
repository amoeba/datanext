import Link from "next/link";

export async function getServerSideProps(context) {
  const url = "https://cn-stage.test.dataone.org/cn/v2/query/solr/?q=*&fl=id,title&rows=10&wt=json";
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
      <Link href={"/package/" + encodeURIComponent(item.id)}><a>{item.id}</a></Link>
    </div >
  );

  return (
    <div>
      <div>Search</div>
      <div>
        {items}
      </div>
    </div>
  )
}
