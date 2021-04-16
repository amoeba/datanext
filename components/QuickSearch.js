import React, { useState } from "react"
import { useRouter } from "next/router"

export default function QuickSearch() {
  const [ query, setQuery ] = useState("");
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();

    const queryString = "?q=" + query.trim()
    router.push("/search" + queryString)
  }

  return <div className="quick-search">
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter a search query...." onChange={(e) => setQuery(e.target.value)} />
      <button type="submit">🔦</button>
    </form>
  </div>
}
