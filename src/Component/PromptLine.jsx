import "./css/PromptLine.css";
import { useState } from "react";
import PropTypes from "prop-types";
import bash from "./bash";
import { appMessages, appNames } from "./run";

function PromptLine({ clearOutput, appendOutput }) {
  const [promptInput, setPromptInput] = useState("");
  const [promptLabel, setPromptLabel] = useState("Login:");

  function handleCommandEnter(e) {
    if (e.key === "Enter") {
      // get arg for apps that require it
      if (promptInput in appMessages) {
        const appName = promptInput
        const appMessage = appMessages[promptInput];
        setPromptLabel(`${appName.toUpperCase()}>`);
        appendOutput(appMessage);
      }
      // run app
      if (promptInput in appNames) {
        // TODO
      }
      else {
        const command = promptInput
        const result = bash(command);
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
