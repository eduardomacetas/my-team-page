import React from 'react'
import './Subtitle.css'

class Subtitle extends React.Component {
  render() {
    return (
      <div>
        {this.props.subtitle}
      </div>
    )
  }
}

export default Subtitle;