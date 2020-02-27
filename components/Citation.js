import React from "react";
import nodeList from "../shared/nodeList";

function Citation({ doc }) {
  let betterNodeName = nodeList.find(el => {
    return el.identifier === doc.datasource;
  });

  const authors = doc.origin ? doc.origin.join(", ") : "";
  const pubYear = doc.pubDate ? new Date(doc.pubDate).getFullYear() : "";
  const title = doc.title ? doc.title : "";
  const repository =
    (betterNodeName ? betterNodeName.name : doc.datasource) + ". ";

  return (
    <div>
      <span className="font-medium text-blue-700">{title}</span>
      <span> by {authors}</span>
      <span> in {pubYear} and </span>
      <span className="font-mono text-sm">from {repository}</span>
    </div>
  );
}

export default Citation;
