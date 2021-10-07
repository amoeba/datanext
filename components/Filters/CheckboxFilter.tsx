import { useState } from "react";
import { FilterProps, Operation } from "../../lib/types"

export default function CheckboxFilter({ field, updateQuery } : FilterProps) {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked ? true : false)

    const updateOperation = {
      operation: e.target.checked ? Operation.SET : Operation.UNSET,
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
