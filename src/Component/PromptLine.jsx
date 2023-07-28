import "./css/PromptLine.css";
import { useState } from "react";
import PropTypes from "prop-types";
import bash from "./bash";
import { appsUImeta } from "../game/Apps";
import { appMessages } from "./run";

function PromptLine({ clearOutput, appendOutput }) {
  const [promptInput, setPromptInput] = useState("");
  const [promptLabel, setPromptLabel] = useState("Login:");

  // function login() {// ask username password (must server credentials)}

  function handleCommandEnter(e) {
    if (e.key === "Enter") {
      // get arg for apps that require it
      if (promptInput in appMessages) {
        const appName = promptInput
        const appMessage = appMessages[promptInput];
        setPromptLabel(`${appName.toUpperCase()}>`);
        appendOutput(appMeta.message);
      }
      // run app
      if (promptInput in apps) {
        // TODO
      }
      else {
        const result = bash(promptInput);
        if (result.path) {
          setPromptLabel(result.path);
        }
        if (result.clearOutput) {
          clearOutput();
        }
        if (result.output) {
          appendOutput(result.output);
        }
      }
      setPromptInput("");
    }
  }

  return (
    <div id="prompt-line">
      <span id="prompt-line-prompt">{promptLabel}</span>
      <input
        type="text"
        id="prompt-line-input"
        value={promptInput}
        onChange={(e) => setPromptInput(e.target.value)}
        onKeyDown={handleCommandEnter}
        autoFocus
      />
    </div>
  );
}

PromptLine.propTypes = {
  clearOutput: PropTypes.func.isRequired,
  appendOutput: PropTypes.func.isRequired,
};

export default PromptLine;
