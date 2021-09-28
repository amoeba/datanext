import React, { useEffect } from "react"
import { cn } from "./api"

export const StoreContext = React.createContext(null)

const parseToken = (token) => {
  return JSON.parse(atob(token.split('.')[1]))
}

export const StoreProvider = ({ children }) => {
  const [token, setToken] = React.useState("")
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [name, setName] = React.useState("")

  useEffect(async () => {
    if (token) {

      const parsed = parseToken(token)
      setIsLoggedIn(true)
      setName(parsed.fullName)

      return;
    }

    await fetch(cn + "/portal/token", {
      credentials: "include"
    })
      .then(response => {
        return response.text()
      }).then(text => {
        const token = text.trim()

        if (token.length > 0) {
          setToken(token)
          setIsLoggedIn(true)

          const parsed = parseToken(token)
          setName(parsed.fullName)
        }
      });
  })

  const store = {
    token: [token, setToken],
    isLoggedIn: [isLoggedIn, setIsLoggedIn],
    name: [name, setName]
  }

  return <StoreContext.Provider value={store}>
    {children}
  </StoreContext.Provider>
}
