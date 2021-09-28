import { useContext } from "react"
import { StoreContext } from "../lib/store"

export default function Profile() {
  const { token, isLoggedIn, name } = useContext(StoreContext)

  return <div>
    <h2>Profile</h2>
    <p>Name is {name[0]}</p>
    <p>IsLoggedIn is <code>{isLoggedIn[0].toString()}</code></p>
    <p>Token is<br />
      <textarea value={token[0]} rows="10" cols="80" readOnly></textarea>
    </p>
  </div >

}
