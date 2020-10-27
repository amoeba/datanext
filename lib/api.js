export const base_url = "https://search.dataone.org/cn/v2/";

export default function query(params) {
  let parts = []

  Object.keys(params).forEach(key => {
    parts.push(key + "=" + params[key]);
  });

  parts.push("wt=json");

  return base_url + "query/solr/" + "?" + parts.join("&");
}
