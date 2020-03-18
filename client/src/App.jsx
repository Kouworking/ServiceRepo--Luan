import React from 'react'
import Modal from './Modal.jsx'
import Avatar from './Avatar.jsx'
import styles from './styles.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  toggleshowModal = (e) => this.setState(({ showModal }) => ({ showModal: !showModal }));

  render() {
    return (
      <div>
        <Avatar></Avatar>
        <button onClick={this.toggleshowModal}>Message Host</button>
        <Modal onClose={this.toggleshowModal} show={this.state.showModal}></Modal>
      </div>
    )
  }
}

export default App;