import React from "react";
import Card from "../Card/Card";
import "./SectionTeam.css";

class SectionTeam extends React.Component {
  render() {
    return (
      <div class="team-section">
        <div class="row">
          <div class="column">
            <Card />
          </div>
          <div class="column">
            <Card />
          </div>
          <div class="column">
            <Card />
          </div>
        </div>
        <div class="row">
          <div class="column">
            <Card />
          </div>
          <div class="column">
            <Card />
          </div>
          <div class="column">
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default SectionTeam;
