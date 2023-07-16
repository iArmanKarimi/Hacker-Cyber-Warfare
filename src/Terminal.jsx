import "./css/Terminal.css";
import { Component } from "react";

export default class Terminal extends Component {
  render() {
    return (
      <>
        <div id="console-header">Konsole v1.0</div>
        <div id="console">
          <div id="status-container">
            <span className="font-OCR-A">Status:</span>
            <span id="connection-status">Not Connected</span>
            <span> :: </span>
            <span id="connection-IP">127.0.0.1</span>
          </div>
          <div id="interface">
            <div id="prompt-line">
              <p id="prompt-dir"></p>
              <input type="text" id="prompt" autoFocus />
            </div>
          </div>
        </div>
      </>
    );
  }
}
