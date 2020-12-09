import React from 'react';
import './TeamCard.css';

class TeamCard extends React.Component {
  render() {
    return (
      <div class="teamCard">
        <div class="upper-container">
          <img src="" alt="" height="350px" width="250px"/>
          <div className="use-role">
            Product Owner
          </div>
        </div>
        <div class="lower-container">
          Eduardo Macetas
        </div>
      </div>
    )
  }
}

export default TeamCard;