import { useState } from "react";
import { FilterProps } from "../../lib/types"

export default function CheckboxFilter({ field, updateQuery } : FilterProps) {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = (e) => {
    setIsChecked(e.target.checked ? true : false)

    const updateOperation = {
      operation: e.target.checked ? "set" : "unset",
      field: field,
      value: "*"
    }

    updateQuery(updateOperation);
  }

  return (<div className="input-group">
    <div className="input-group-name">{ field }</div>
    <div className="input-group-controls">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
    </div>
  </div>)
}
