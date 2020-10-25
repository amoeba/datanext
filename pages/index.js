import Link from "next/link";

export async function getServerSideProps(context) {
  return {
    props: {
      results: [{
        id: "A"
      }]
    },
  }
}

export default function Index({
  results
}) {
  const items = results.map((item) =>
    <div key={item.id}>
      <Link href={"/package/" + item.id}><a>{item.id}</a></Link>
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
