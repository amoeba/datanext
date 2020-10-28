const api = require("../lib/api");

test("query works", () => {
  expect(
    api.query({ "fl": "identifier" })
  ).toBe("https://search.dataone.org/cn/v2/query/solr/?fl=identifier&wt=json");

  expect(
    api.query({
      "q": "formatType:METADATA",
      "fl": "identifier"
    })
  ).toBe("https://search.dataone.org/cn/v2/query/solr/?q=formatType:METADATA&fl=identifier&wt=json");
});
