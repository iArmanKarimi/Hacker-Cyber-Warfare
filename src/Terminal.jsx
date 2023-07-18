import "./css/Terminal.css";
import { Component } from "react";
import PromptLine from "./Component/PromptLine";
import TerminalOutput from "./Component/TerminalOutput";
import ConnectionStatusBar from "./Component/ConnectionStatusBar";

export default class Terminal extends Component {
  render() {
    return (
      <>
        <div id="console-header">Konsole v1.0</div>
        <div id="console">
          <ConnectionStatusBar />
          <div id="interface">
            <TerminalOutput />
            <PromptLine />
          </div>
        </div>
      </>
    );
  }
}
