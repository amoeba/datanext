import React, { useEffect } from "react"

export const StoreContext = React.createContext(null)

export const StoreProvider = ({ children }) => {
  const [token, setToken] = React.useState(null)

  useEffect(async () => {
    console.log("Checking for a token")

    if (token) {
      console.log("Already have a token, not fetching one");

      return;
    }

    await fetch("https://cn.dataone.org/portal/token", {
      credentials: "include"
    })
      .then(response => {
        return response.text()
      }).then(text => {
        console.log("Setting token of '", text, "'")
        setToken(text)
      });
  })

  const store = {
    token: [token, setToken]
  }

  return <StoreContext.Provider value={store}>
    {children}
  </StoreContext.Provider>
}
