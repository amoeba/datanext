import { useState } from "react";

export default function TextFilter({ query, updateQuery }) {
  const [value, setValue] = useState("")

  return <div className="input-jumbotron">
    <input type="text" value={value} onChange={(e) => { setValue(e.target.value); updateQuery({ "q": { "text": e.target.value || "*" } }) }} placeholder="Enter a query" />
  </div>
}
