import fetch from "isomorphic-unfetch";

const MetadataFetcher = key => {
  // TODO: Improve this
  const url =
    "https://search-stage.test.dataone.org" +
    "/cn/v2/" +
    "query/solr/" +
    "?q=id:" +
    '"' +
    key +
    '"' +
    "&wt=json";

  const result = fetch(url).then(r => r.json());

  return result;
};

export default MetadataFetcher;
