import { useState } from "react";

export default function YearFilter({ query, updateQuery }) {
  const [beginDate, setBeginDate] = useState(1800)
  const [endDate, setEndDate] = useState(2021)

  return <div className="input-group">
    <div className="input-group-name">
      Year
    </div>
    <div className="input-group-controls">
      <div>
        <div>After</div>
        <input type="number" value={beginDate} onChange={(e) => { setBeginDate(e.target.value); updateQuery({ "q": { "beginDate": `[${e.target.value}-01-01T00:00:00Z TO NOW]` } }) }} />
        <input type="range" value={beginDate} min="1800" max="2021" onChange={(e) => { setBeginDate(e.target.value); updateQuery({ "q": { "beginDate": `[${e.target.value}-01-01T00:00:00Z TO NOW]` } }) }} />
      </div>
      <div>
        <div>Before</div>
        <input type="number" value={endDate} onChange={(e) => { setEndDate(e.target.value); updateQuery({ "q": { "endDate": `[* TO ${e.target.value}-01-01T00:00:00Z]` } }) }} />
        <input type="range" value={endDate} min="1800" max="2021" onChange={(e) => { setEndDate(e.target.value); updateQuery({ "q": { "endDate": `[* TO ${e.target.value}-01-01T00:00:00Z]` } }) }} />
      </div>
    </div>
  </div>
}
