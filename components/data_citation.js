import React from "react";

export default class Metadata extends React.Component {


  render () {
    // Try to find a better node name
    const nodes = this.props.appData.nodes;

    let betterNodeName = nodes.find(el => {
      return el.id === this.props.doc.datasource
    });

    const authors = this.props.doc.origin ? this.props.doc.origin.join(', ') + '. ' : '';
    const pubYear = this.props.doc.pubDate ? new Date(this.props.doc.pubDate).getFullYear() + '. ' : '';
    const title = this.props.doc.title + '. ' || '';
    const repository = (betterNodeName ? betterNodeName.name : this.props.doc.datasource) + '. ';

    return (<span >
      <span>{authors}</span>
      <span>{pubYear}</span>
      <span className="title">{title}</span>
      <span>{repository}</span>
      <span>{this.props.pid}</span>
      <style jsx>{`
        span.title {
          font-weight: bold;
        }
      `}</style>
    </span>);
  }
  
}
