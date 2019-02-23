import React from "react";

export default class PackageTable extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const url = process.env.api_base + 
      'query/solr/?q=resourceMap:"' + 
      this.props.id + 
      '"&rows=1&fl=id,fileName,formatType,formatId,size&wt=json';

    fetch(url)
      .then(req => {
        return req.json()
      })
      .then(json => {
        this.setState({
          data: json
        })
      });
  }

  render() {
    if (!this.state.data || !this.state.data.response || !this.state.data.response.docs) {
      return null;
    }

    return (<div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Format</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.response.docs.map((doc, i) => {
            return (
              <tr key={i}>
                <td>{doc.fileName || doc.id }</td>
                <td>{doc.formatId}</td>
                <td>{doc.size}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <style jsx>{`
        table {
          cell-spacing: collapse;
          margin-bottom: 0.5rem;
          width: 100%;
        }

        th,
        td {
          border: 1px solid #ccc;
        }

        th {
          background-color: #ccc;
        }
      `}</style>
    </div>);
  }

}





