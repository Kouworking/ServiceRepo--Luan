import React from 'react'
// import styles from './styles.css'
// console.log(styles)

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <img src="https://img.peerspace.com/image/upload/c_crop,g_custom/f_auto,fl_progressive/c_scale,dpr_auto,h_100,w_100/xdgd0bwcxmkvumjlcp57" />
        <p>host name</p>
      </div>
    )
  }
}

export default Avatar;