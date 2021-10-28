export type FilterProps = {
  field: string,
  initialState: any,
  updateQuery: Function
}

export enum Operation {
  SET = "SET",
  UNSET = "UNSET"
}
