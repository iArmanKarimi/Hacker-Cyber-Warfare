import "./css/Terminal.css";
import { Component } from "react";
import StatusBar from "./Component/StatusBar";

export default class Terminal extends Component {
  render() {
    return (
      <>
        <div id="console-header">Konsole v1.0</div>
        <div id="console">
          <StatusBar />
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
