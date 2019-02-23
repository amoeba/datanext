import React from "react";
import urlencode from "urlencode";

export default class Metadata extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      html: null
    };
  }

  componentDidMount() {
    const object_url =
      'https://cn-stage.test.dataone.org/cn/v2/views/metacatui/' + urlencode(this.props.id);

    fetch(object_url)
      .then(req => {
        return req.text()
      })
      .then(data => {
        this.setState({
          html: data
        })
      });
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.html}}></div>
    );
  }
}
