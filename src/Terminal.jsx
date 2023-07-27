import "./css/Terminal.css";
import { Component } from "react";
import PromptLine from "./Component/PromptLine";
import TerminalInterface from "./Component/TerminalInterface";
import ConnectionStatusBar from "./Component/ConnectionStatusBar";

export default class Terminal extends Component {
  render() {
    return (
      <>
        <div id="console-header">Konsole v1.0</div>
        <div id="console">
          <ConnectionStatusBar />
          <div id="interface">
            <TerminalInterface />
            <PromptLine />
          </div>
        </div>
      </>
    );
  }
}
