export default function AbstractFilter({ query, updateQuery }) {
  return <div>Abstract
    <input type="text" value={query.q?.abstract} onChange={(e) => { updateQuery({ "q": { "abstract": e.target.value } }) }} />
  </div>
}
