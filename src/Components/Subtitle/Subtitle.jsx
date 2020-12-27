import React from "react";
import "./Subtitle.css";

class Subtitle extends React.Component {
  render() {
    return <div className="subtitle">{this.props.subtitle}</div>;
  }
}

export default Subtitle;
