import fetch from "unfetch";

const PackageFetcher = key => {
  // TODO: Improve this
  const url =
    "https://search-stage.test.dataone.org" +
    "/cn/v2/" +
    "query/solr/" +
    '?q=resourceMap:"' +
    key +
    '"+AND+formatType:DATA&wt=json';

  const result = fetch(url).then(r => r.json());

  return result;
};

export default PackageFetcher;
