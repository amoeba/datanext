import { withRouter } from 'next/router'
import useSWR from 'swr'
import Header from '../components/Header.js'
import MetadataView from '../components/MetadataView.js'
import MetadataFetcher from '../lib/MetadataFetcher.js'

function Package(props) {
  const { router } = props
  const id = router.query.id
  const { data, error } = useSWR(id, MetadataFetcher)

  // This pattern sucks...
  let content

  if (error) {
    content = <div>Failed to load</div>
  } else if (!data) {
    content = <div>Loading...</div>
  } else {
    content = <MetadataView doc={data.response.docs[0]} />
  }

  return <div>
    <Header />
    <h2>{id}</h2>
    {content}
  </div>
}

export default withRouter(Package)
