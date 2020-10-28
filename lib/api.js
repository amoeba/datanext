export const base_url = "https://search.dataone.org/cn/v2/";

export function query(params) {
  let parts = []

  Object.keys(params).forEach(key => {
    parts.push(key + "=" + params[key]);
  });

  parts.push("wt=json");

  return base_url + "query/solr/" + "?" + parts.join("&");
}

export function search(input) {
  let q = input ? input : "*";

  return query({
    "q": q + "+AND+resourceMap:*+AND+-obsoletedBy:*+AND+formatType:METADATA",
    "fl": "id,title,origin,pubDate,publisher",
    "sort": "dateUploaded+desc",
    "rows": 25
  })
}

export function object(identifier) {
  return query({
    "q": 'id:"' + identifier + '"',
    "fl": "identifier,title,origin,pubDate,resourceMap",
    "rows": 1
  });
}

export function pkg(identifier) {
  return query({
    "q": 'resourceMap:"' + identifier + '"',
    "fl": "identifier,formatId,size",
    "rows": 1000
  });
}
