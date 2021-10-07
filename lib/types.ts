export type FilterProps = {
  field: string,
  updateQuery: Function
}

export enum Operation {
  SET = "SET",
  UNSET = "UNSET"
}
