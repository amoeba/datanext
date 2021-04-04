import _ from "lodash"
import SearchResultLoader from "../components/SearchResultLoader"

export default function SearchResultLoaders({ n }) {
  return _.times(n, n => <SearchResultLoader key={n} />)
}