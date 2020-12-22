import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div class="card">
        <div class="upper-container">
          <img src="" alt="" height="350px" width="250px" />
          <div className="user-role">Product Owner</div>
        </div>
        <div class="lower-container">Eduardo Macetas</div>
      </div>
    );
  }
}

export default Card;
