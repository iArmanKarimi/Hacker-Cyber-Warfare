import "./css/Terminal.css";
import { Component } from "react";

export default class Terminal extends Component {
  render() {
    return (
      <>
        <div id="console-header">Konsole v1.0</div>
        <div id="console">
          <div className="status">
            <p className="font-OCR-A">Status:</p>
            <p>Not Connected :: 127.0.0.1</p>
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
