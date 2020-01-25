import fetch from "isomorphic-unfetch";

const SearchFetcher = key => {
  // TODO: Improve this
  const url =
    "https://search-stage.test.dataone.org" +
    "/cn/v2/" +
    "query/solr/" +
    "?q=*+AND+-obsoletedBy:*+AND+formatType:METADATA+AND+resourceMap:*&order=dateUploaded+desc&rows=10&wt=json";

  const result = fetch(url)
    .then(r => r.json())
    .then(json => json.response.docs);

  return result;
};

export default SearchFetcher;
