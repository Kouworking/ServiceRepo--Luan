import React from 'react'
import Avatar from './Avatar.jsx'
import DateTime from './DateTime.jsx'
// import styles from './styles.css'

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className='modal-container'>
        <div className='modal'>
          <button className='close' onClick={this.props.onClose}>+</button>
          <div className='column-instruction'>
            <Avatar></Avatar>
            <ul>
              <li>Introude yourself</li>
              <li>Descruibe your activity</li>
              <li>Describe how you plan to use the space</li>
            </ul>
          </div>
          <div className='column-form'>
            <p>When is your activity?</p>
            <DateTime></DateTime>
            <p>* Require information</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;