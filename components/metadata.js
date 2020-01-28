import React from "react";
import urlencode from "urlencode";

export default class Metadata extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      html: null
    };
  }

  componentDidMount() {
    const object_url =
      process.env.api_base + "views/metacatui/" + urlencode(this.props.id);

    fetch(object_url)
      .then(req => {
        return req.text();
      })
      .then(data => {
        this.setState({
          isLoaded: true,
          html: data
        });
      });
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div
        id="metadata"
        dangerouslySetInnerHTML={{ __html: this.state.html }}
      ></div>
    );
  }
}