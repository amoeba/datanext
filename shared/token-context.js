import React from "react";

const TokenContext = React.createContext({
  token: null,
  updateToken: () => {},
});

export default TokenContext;
