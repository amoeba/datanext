import useSWR from 'swr'
import fetch from 'unfetch'

import SearchResult from '../components/SearchResult.js'

const key = '*:*';

const fetcher = async (path) => {
  const url = 'https://search.dataone.org/cn/v2/query/solr/?q=' +
    path +
    '+AND+formatType:METADATA+AND+-obsoletedBy:*' +
    '&sort=dateUploaded+desc' +
    '&fl=identifier,dateUploaded' +
    '&wt=json';

  return fetch(url).then(r => r.json());
}

Index.getInitialProps = async () => {
  const data = await fetcher(key);

  return { data };
}

function Index() {
  const initialData = props.data;
  const { data, error } = useSWR(key, fetcher, { initialData })

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (<ul>
    { data.response.docs.map(d => SearchResult(d)) }
  </ul>)
}

export default Index
