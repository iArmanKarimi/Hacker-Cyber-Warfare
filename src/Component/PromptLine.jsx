import "./css/PromptLine.css";
import { useState } from "react";
import PropTypes from "prop-types";
import bash from "./bash";
import { appNames, run } from "./run";

function PromptLine({ clearOutput, appendOutput }) {
  const [username, setUsername] = useState('');
  const [promptInput, setPromptInput] = useState("");
  const [promptLabel, setPromptLabel] = useState("Login:");
  const [askUsernameStep, setAskUsernameStep] = useState(true);
  const [askPasswordStep, setAskPasswordStep] = useState(false);
  const [initialLoginStep, setInitialLoginStep] = useState(true);

  // TODO
  // function handlePasswordInput() {}
  // function handleAppInput() {}
  // function handleCommandInput() {}

  function usernameInputStage() {
    if (promptInput === 'root') {
      appendOutput('Login: root')
      setPromptLabel('Password:')
      setAskPasswordStep(true)
      setAskUsernameStep(false)
    } else {
      appendOutput('wrong username!')
    }
  }

  function initialLogin() {

  }

  function handleInputEnter(e) {
    if (e.key !== "Enter") return
    if (initialLoginStep) {
      initialLogin()
    }
    if (askUsernameStep) {
      usernameInputStage()
    }
    if (askPasswordStep) {
      setPromptInput('')
      // TODO 
      // if user runs john from menu, show them password
      // if password is correct, update prompt label with path
      if ('correct password') {
        // ...
        setAskPasswordStep(false)
      } else {
        appendOutput("wrong password!")
      }
      return
    }
    // Apps
    if (promptInput in appNames) {
      const app = promptInput
      const result = run(app)
      if (result.output) {
        appendOutput(result)
      }
      if (result.openedConnection) {
        setPromptInput('')
        setPromptLabel('Login:')
        setAskUsernameStep(true)
        return
      }
    } // Commands
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

  return (
    <div id="prompt-line">
      <span id="prompt-line-prompt">{promptLabel}</span>
      <input
        type="text"
        id="prompt-line-input"
        value={promptInput}
        onChange={(e) => setPromptInput(e.target.value)}
        onKeyDown={handleInputEnter}
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
