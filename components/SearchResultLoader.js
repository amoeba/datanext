import _ from "lodash"

export default function SearchResultLoader() {
  const radius = 30
  const nlines = 3

  const lines = _.times(nlines, i => <div key={i}>&nbsp;</div>)

  return <div className="search-result loading">
    <div className="search-result-icon">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={radius * 2} height={radius * 2} viewBox={"0 0 " + radius * 2 + " " + radius * 2}>
        <circle r="50%" cx="50%" cy="50%" fill="rgba(200, 200, 200, 0.75)" />
      </svg>
    </div>
    <div className="search-result-text">
      {lines}
    </div>
  </div>
}