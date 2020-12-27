import React from "react";
import "./Header.css";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import TextParagraph from "../TextParagraph/TextParagraph";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="column">
          <Title title="The creative crew" />
        </div>
        <div className="column">
          <Subtitle subtitle="Who we are" />
          <TextParagraph />
        </div>
      </div>
    );
  }
}

export default Header;
