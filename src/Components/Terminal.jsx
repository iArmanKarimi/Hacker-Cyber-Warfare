import "./css/Terminal.css";
import { useState } from "react";
import PopupWindow from "./PopupWindow";
import PromptLine from "../features/PromptLine/PromptLine";
import TerminalInterface from "../features/TerminalInterface/TerminalInterface";
import ConnectionStatusBar from "./ConnectionStatusBar";

function Terminal() {
  const [outputs, setOutputs] = useState(["Please enter your nick/alias..."]);

  const clearOutput = () => setOutputs([]);
  const appendOutput = (newOutput) =>
    setOutputs((prevOutputs) => [...prevOutputs, newOutput]);

  const promptInputFocus = () =>
    document.getElementById('prompt-line-input').focus()

  return (
    <>
      <div id="console-header">Konsole v1.0</div>
      <div id="console">
        <ConnectionStatusBar />
        <div id="interface" onClick={promptInputFocus}>
          <PopupWindow />
          <TerminalInterface outputs={outputs} />
          <PromptLine clearOutput={clearOutput} appendOutput={appendOutput} />
        </div>
      </div>
    </>
  );
}

export default Terminal;
