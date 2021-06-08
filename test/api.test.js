const api = require("../lib/api");

test("query works", () => {
  expect(
    api.query({ "fl": "identifier" })
  ).toBe(`${api.base_url}query/solr/?fl=identifier&wt=json`);

  expect(
    api.query({
      "q": "formatType:METADATA",
      "fl": "identifier"
    })
  ).toBe(`${api.base_url}query/solr/?q=formatType:METADATA&fl=identifier&wt=json`);
});

test("to_solr_query_params works", () => {
  expect(api.to_solr_query(null)).toBe("q=title:*+AND+resourceMap:*+AND+-obsoletedBy:*+AND+formatType:METADATA&fl=id,title,origin,pubDate,publisher&sort=dateUploaded+desc&rows=25&wt=json")
  expect(api.to_solr_query({ "q": { "title": "fish" } })).toBe("q=title:fish+AND+resourceMap:*+AND+-obsoletedBy:*+AND+formatType:METADATA&fl=id,title,origin,pubDate,publisher&sort=dateUploaded+desc&rows=25&wt=json")
})

test("to_solr_query_params works", () => {
  expect(api.to_solr_query_params({
    "q": {
      "title": "foobar"
    }
  })).toBe('q=title:foobar')

  expect(api.to_solr_query_params({
    "q": {
      "title": "foobar",
      "abstract": "Interesting!"
    }
  })).toBe('q=title:foobar+AND+abstract:Interesting!')
})

test("empty params are ignored", () => {
  expect(api.to_solr_query_params({
    "q": {
      "abstract": ""
    }
  })).toBe("q=")
})
