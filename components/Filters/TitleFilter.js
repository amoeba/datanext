import { useState } from "react";

export default function TitleFilter({ query, updateQuery }) {
  const [title, setTitle] = useState("")

  return <div className="input-group">
    <div className="input-group-name">Title</div>
    <div className="input-group-controls">
      <input type="text" value={title} onChange={(e) => { setTitle(e.target.value); updateQuery({ "q": { "title": e.target.value || "*" } }) }} />
    </div>
  </div>
}
