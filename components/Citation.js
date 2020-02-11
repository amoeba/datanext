import React from "react";
import nodeList from "../shared/nodeList";

function Citation({ doc }) {
  let betterNodeName = nodeList.find(el => {
    return el.identifier === doc.datasource;
  });

  const authors = doc.origin ? doc.origin.join(", ") + ". " : "";
  const pubYear = doc.pubDate ? new Date(doc.pubDate).getFullYear() + ". " : "";
  const title = doc.title + ". " || "";
  const repository =
    (betterNodeName ? betterNodeName.name : doc.datasource) + ". ";

  return (
    <span className="citation">
      <span>{authors}</span>
      <span>{pubYear}</span>
      <span className="title">{title}</span>
      <span>{repository}</span>
      <span>{doc.identifier}</span>
      <style jsx>{`
        span.citation {
          display: inline-block;
        }

        span.title {
          font-weight: bold;
        }
      `}</style>
    </span>
  );
}

export default Citation;
