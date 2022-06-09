import { useContext } from "react";
import { StoreContext } from "../lib/store";

export default function Profile() {
  const { token, isLoggedIn, name } = useContext(StoreContext);

  return (
    <div>
      <h2>Profile</h2>
      <p>Your Name is {name[0] || "Unknown"}</p>
      <p>
        IsLoggedIn is <code>{isLoggedIn[0].toString()}</code>
      </p>
      <p>
        Token is
        <input type="text" value={token[0]} readOnly />
      </p>
    </div>
  );
}
