import { useState } from "react";

export default function AbstractFilter({ query, updateQuery }) {
  const [abstract, setAbstract] = useState("")

  return <div className="input-group">
    <div className="input-group-name">Abstract</div>
    <div className="input-group-controls">
      <input type="text" value={abstract} onChange={(e) => { setAbstract(e.target.value); updateQuery({ "q": { "abstract": e.target.value } }) }} />
    </div>
  </div>
}
