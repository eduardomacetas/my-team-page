import React from 'react';
import './Title.css';

class Title extends React.Component {
  render() {
    return ( 
      <div class="title">
        {this.props.title}
      </div>
    )
  }
}

export default Title;