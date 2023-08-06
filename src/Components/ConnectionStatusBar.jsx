import { Component } from "react";
import PropTypes from "prop-types";

let style = {
  container: {
    padding: "2px",
    borderBottom: "1px solid blue",
  },
};

class ConnectionStatusBar extends Component {
  static propTypes = {
    IP: PropTypes.string,
    status: PropTypes.string,
  };
  static defaultProps = {
    IP: "127.0.0.1",
    status: "Not Connected",
  };
  render() {
    return (
      <div style={style.container}>
        <span className="font-OCR-A">Status:</span>
        <span id="connection-status">{this.props.status}</span>
        <span> :: </span>
        <span id="connection-IP">{this.props.IP}</span>
      </div>
    );
  }
}

export default ConnectionStatusBar;
