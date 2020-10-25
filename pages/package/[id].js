import { useRouter } from 'next/router'
import Head from "next/head";

export async function getServerSideProps(context) {
  const url = 'https://cn-stage.test.dataone.org/cn/v2/query/solr/?q=id:"' +
    decodeURIComponent(context.query.id) +
    '"&fl=id,title&rows=1&wt=json';
  const res = await fetch(url)
  const data = await res.json()

  return {
    props: {
      data: data
    }
  };
}

export default function Package({ data }) {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <Head>
        <title>{data.response.docs[0].title}</title>
      </Head>
      <div>Package: {id}</div>
      <div>Title: {data.response.docs[0].title}</div>
    </div>
  )
}
