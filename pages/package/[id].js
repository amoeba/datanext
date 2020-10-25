import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  return {
    props: {
      document: {
        title: "Test"
      }
    },
  }
}

export default function Package({ document }) {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <div>Package {id}</div>
      <div>{document.title}</div>
    </div>
  )
}
