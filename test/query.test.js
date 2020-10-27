const query = require("../lib/query");

test("query works", () => {
  expect(
    query.query({ "fl": "identifier" })
  ).toBe("?fl=identifier&wt=json");

  expect(
    query.query({
      "q": "formatType:METADATA",
      "fl": "identifier"
    })
  ).toBe("?q=formatType:METADATA&fl=identifier&wt=jso");
});
