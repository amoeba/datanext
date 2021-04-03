import Package from "../components/Package"

export default function Packages({ ids }) {
  const content = ids.map(p => <Package id={p} />)

  return <div>{content}</div>
}
