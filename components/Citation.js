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
    <span className="citation">
      <span className="title">{title}</span>
      <span className="authors"> by {authors}</span>
      <span className="pubYear"> from {pubYear} and </span>
      <span className="repository">published on {repository}.</span>
      <style jsx>{`
        span.citation {
          display: inline-block;
        }

        span.title {
          font-weight: bold;
        }

        .authors,
        .pubYear,
        .repository {
          color: #666;
        }
      `}</style>
    </span>
  );
}

export default Citation;
