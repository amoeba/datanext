import React from "react";

export default class Metadata extends React.Component {


  render () {
    // {this.props.doc.origin.join(', ')}. {}. {this.props.doc.title}. {this.props.doc.datasource}. {metadata}.
    const authors = this.props.doc.origin ? this.props.doc.origin.join(', ') + '. ' : '';
    const pubYear = this.props.doc.pubDate ? new Date(this.props.doc.pubDate).getFullYear() + '. ' : '';
    const title = this.props.doc.title + '. ' || '';
    const repository = this.props.doc.datasource + '. ';


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
