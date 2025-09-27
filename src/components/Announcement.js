// src/components/Announcement.js
import React, { Component } from "react";

class Announcement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announcement: "📢 New batches start next Monday — enroll now!",
    };
  }

  render() {
    return (
      <div className="mt-3">
        <div className="alert alert-info" role="alert">
          {this.state.announcement}
        </div>
      </div>
    );
  }
}

export default Announcement;
