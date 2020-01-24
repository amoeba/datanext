import useSWR from 'swr'
import Header from '../components/Header.js'
import SearchResults from '../components/SearchResults.js'

import SearchFetcher from '../lib/SearchFetcher.js'

function Index() {
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
  return <div>
    <Header />
    {content}
  </div>
}

export default Index
