import { useContext } from "react";
import { StoreContext } from "../lib/store";

export default function About() {
  const { token } = useContext(StoreContext)

  return <div>
    <h2>About</h2>
    <p>About DataONE...</p>
    {JSON.stringify(token)}
  </div>
}
