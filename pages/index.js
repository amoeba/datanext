import useSWR from 'swr'
import Layout from '../components/Layout.js'
import SearchResults from '../components/SearchResults.js'
import SearchFetcher from '../lib/SearchFetcher.js'

const Index = () => {
  const { data, error } = useSWR('*', SearchFetcher)

  // This pattern sucks...
  let content

  if (error) {
    content = <div>Failed to load</div>
  } else if (!data) {
    content = <div>Loading...</div>
  } else {
    content = <SearchResults data={data} />
  }
  return <Layout>
    {content}
  </Layout>
}

export default Index
