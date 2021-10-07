import { useState } from "react";

export default function TextFilter({ field, updateQuery }) {
  const [value, setValue] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value);

    const updateOperation = {
      operation: e.target.value.length > 0 ? "set" : "unset",
      field: field,
      value: e.target.value
    }

    updateQuery(updateOperation)
  }

  return <div className="input-group">
    <div className="input-group-name">{ field }</div>
    <div className="input-group-controls">
      <input type="text" value={value} onChange={handleChange} placeholder="Enter a query" />
    </div>
  </div>
}
