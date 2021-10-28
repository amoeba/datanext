import { useState } from "react";
import { FilterProps, Operation } from "../../lib/types"

export default function CheckboxFilter({ field, initialState, updateQuery } : FilterProps) {
  const [isChecked, setIsChecked] = useState(initialState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked ? true : false)

    const updateOperation = {
      operation: e.target.checked ? Operation.SET : Operation.UNSET,
      field: field,
      value: "*"
    }

    updateQuery(updateOperation);
  }

  return (<label className="input-group">
    <span className="input-group-name">{ field }</span>
    <div className="input-group-controls">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
    </div>
  </label>)
}
