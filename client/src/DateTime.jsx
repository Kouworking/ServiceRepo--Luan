import React from 'react'

class DateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <h3>Date & Time</h3>
        <form>start date</form>
        <span>
          <form>start time</form>
          <form>end time</form>
        </span>
      </div>
    );
  }
}

export default DateTime;