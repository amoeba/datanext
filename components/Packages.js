import Package from "../components/Package"

export default function Packages({ ids }) {
  const content = ids.map(p => <Package key={p} id={p} />)

  return <div className="packages">{content}</div>
}
