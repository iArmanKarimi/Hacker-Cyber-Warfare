import { Component } from "react";

let style = {
  container: {
    padding: "2px",
    borderBottom: "1px solid blue",
  },
};

class StatusBar extends Component {
  render() {
    return (
      <div style={style.container}>
        <span className="font-OCR-A">Status:</span>
        <span id="connection-status">Not Connected</span>
        <span> :: </span>
        <span id="connection-IP">127.0.0.1</span>
      </div>
    );
  }
}

export default StatusBar;
