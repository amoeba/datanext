import React, { useEffect } from "react";
import { cn, default_query } from "./api";

import { parse } from "fast-xml-parser";

export const StoreContext = React.createContext(null);

const parseToken = (token) => {
  return JSON.parse(atob(token.split(".")[1]));
};

export const StoreProvider = ({ children }) => {
  const [token, setToken] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [name, setName] = React.useState("");
  const [nodes, setNodes] = React.useState([]);
  const [query, setQuery] = React.useState(default_query());

  useEffect(() => {
    async function tryLogin() {
      if (token) {
        const parsed = parseToken(token);

        setIsLoggedIn(true);
        setName(parsed.fullName);

        return;
      }

      await fetch(cn + "/portal/token", {
        credentials: "include",
      })
        .then((response) => {
          return response.text();
        })
        .then((text) => {
          const token = text.trim();

          if (token.length > 0) {
            setToken(token);
            setIsLoggedIn(true);

            const parsed = parseToken(token);
            setName(parsed.fullName);
          }
        });
    }

    tryLogin();
  }, [token]);

  useEffect(() => {
    async function getNodeList() {
      if (nodes.length !== 0) {
        return;
      }

      await fetch(cn + "/cn/v2/node")
        .then((response) => {
          return response.text();
        })
        .then((text) => {
          const json = parse(text);

          setNodes(json[Object.keys(json)[0]]["node"]);
        });
    }

    getNodeList();
  }, [nodes]);

  const store = {
    token: [token, setToken],
    isLoggedIn: [isLoggedIn, setIsLoggedIn],
    name: [name, setName],
    nodes: [nodes, setNodes],
    query: [query, setQuery],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
