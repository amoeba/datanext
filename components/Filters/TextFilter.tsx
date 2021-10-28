import { ChangeEventHandler, useState } from "react";
import { FilterProps, Operation } from "../../lib/types"

export default function TextFilter({ field, updateQuery } : FilterProps) {
  const [value, setValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    const updateOperation = {
      operation: e.target.value.length > 0 ? Operation.SET : Operation.UNSET,
      field: field,
      value: e.target.value
    }

    updateQuery(updateOperation)
  }

  return <label className="input-group">
    <span className="input-group-name">{ field }</span>
    <div className="input-group-controls">
      <input type="text" value={value} onChange={handleChange} placeholder="Enter a query" />
    </div>
  </label>
}
