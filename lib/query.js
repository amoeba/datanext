const base = "https://cn-stage.test.dataone.org/cn/v2/query/solr/";

export default function query(params) {
  let parts = []

  Object.keys(params).forEach(key => {
    parts.push(key + "=" + params[key]);
  });

  parts.push("wt=json");

  return base + "?" + parts.join("&");
}
