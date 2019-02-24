import React from "react";

export default class Metadata extends React.Component {


  render () {
    // {this.props.doc.origin.join(', ')}. {}. {this.props.doc.title}. {this.props.doc.datasource}. {metadata}.
    const authors = this.props.doc.origin ? this.props.doc.origin.join(', ') + '. ' : '';
    const pubYear = this.props.doc.pubDate ? new Date(this.props.doc.pubDate).getFullYear() + '. ' : '';
    const title = this.props.doc.title + '. ' || '';
    const repository = this.props.doc.datasource + '. ';


    return (<span class="data_citation">
      <span class="citation_author">{authors}</span>
      <span class="citation_pub_year">{pubYear}</span>
      <span class="citation_title">{title}</span>
      <span class="citation_repository">{repository}</span>
      <span class="citation_id">{this.props.pid}</span>
    </span>);
  }
  
}
