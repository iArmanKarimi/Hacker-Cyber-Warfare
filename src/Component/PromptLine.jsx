import "./css/PromptLine.css";
import { useState } from "react";
import { appsUImeta } from "../game/Apps";
import PropTypes from "prop-types";

const formatPromptPWD = (pwd) => `[ root~${pwd}/ ] #`;



function PromptLine(props) {
  const [promptInput, setPromptInput] = useState("Login:");

  function handleCommandEnter(e) {
    if (e.key === "Enter") {
      // process app/command
      if (promptInput in appsUImeta) {
        const appMeta = appsUImeta[promptInput];
        setPromptInput(appMeta.prompt);
        props.appendOutput(appMeta.message);
      }
      if ()
    }
  }

  return (
    <div id="prompt-line">
      <span id="prompt-line-prompt">{prompt}</span>
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
