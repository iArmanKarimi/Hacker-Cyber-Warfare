import { Component } from "react";
import "./css/PromptLine.css";

export default class PromptLine extends Component {
  render() {
    return (
      <div id="prompt-line">
        <span id="prompt-dir">Login:</span>
        <input type="text" id="prompt" autoFocus />
      </div>
    );
  }
}
