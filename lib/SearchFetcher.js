import fetch from 'unfetch'

export default key => {
  // TODO: Improve this
  const url = 'https://search-stage.test.dataone.org/cn/v2/query/solr/?q=*+AND+-obsoletedBy:*+AND+formatType:METADATA&order=dateUploaded+desc&rows=10&wt=json';

  return fetch(url).then(r => r.json())
}