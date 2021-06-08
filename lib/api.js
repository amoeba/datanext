export const base_url = "https://search-stage.test.dataone.org/cn/v2/";
export const default_query = {
  "q": {
    "title": "*",
    "resourceMap": "*",
    "-obsoletedBy": "*",
    "formatType": "METADATA"
  },
  "fl": "id,title,origin,pubDate,publisher",
  "sort": "dateUploaded+desc",
  "rows": "25",
  "wt": "json"
}

export function to_solr_query(params) {
  if (!params) {
    return to_solr_query_params(default_query)
  }

  let modified = default_query

  Object.keys(modified).forEach(param => {
    if (!params[param]) {
      return
    }

    if (param === "q") {
      modified[param] = { ...modified[param], ...params[param] }
    } else {
      modified[param] = params[param]
    }
  });

  return to_solr_query_params(modified)
}

export function to_solr_query_params(params) {
  return Object.keys(params).map(param => {
    return to_solr_query_param(param, params[param])
  }).join("&")
}

export function to_solr_query_param(param, value) {
  if (param === "q") {
    return `q=${to_solr_query_param_q(value)}`
  } else {
    return `${param}=${value}`
  }
}

export function to_solr_query_param_q(q) {
  return Object.keys(q).filter(p => {
    return q[p].length && q[p].trim().length > 0
  }).map(p => {
    return `${p}:${q[p]}`
  }).join("+AND+")
}

export function query(params) {
  let parts = []

  Object.keys(params).forEach(key => {
    parts.push(key + "=" + params[key]);
  });

  parts.push("wt=json");

  return base_url + "query/solr/" + "?" + parts.join("&");
}

export function search(input) {
  return base_url + "query/solr/" + "?" + to_solr_query(input)
}

export function object(identifier) {
  return query({
    "q": 'id:"' + identifier + '"',
    "fl": "identifier,title,origin,pubDate,resourceMap",
    "rows": 1
  });
}

export function pkgMembers(identifier) {
  return query({
    "q": 'resourceMap:"' + identifier + '"',
    "fl": "identifier,fileName,formatId,size,dataUrl",
    "rows": 1000
  });
}

export function view(identifier) {
  return base_url + "views/metacatui/" + encodeURIComponent(identifier);
}
