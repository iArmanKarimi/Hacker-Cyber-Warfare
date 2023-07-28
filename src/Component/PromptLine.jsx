import "./css/PromptLine.css";
import { useState } from "react";
import PropTypes from "prop-types";
import bash from "./bash";
import { appNames, run } from "./run";

function PromptLine({ clearOutput, appendOutput }) {
  const [username, setUsername] = useState('');
  const [promptInput, setPromptInput] = useState("");
  const [promptLabel, setPromptLabel] = useState("Login:");
  const [askLoginUsernameStep, setLoginAskUsernameStep] = useState(true);
  const [askLoginPasswordStep, setLoginAskPasswordStep] = useState(false);
  const [initialLoginStep, setInitialLoginStep] = useState(true);

  // TODO
  // function handlePasswordInput() {}
  // function handleAppInput() {}
  // function handleCommandInput() {}

  function askLoginUsername() {
    if (promptInput === 'root') {
      appendOutput('Login: root')
      setPromptLabel('Password:')
      setLoginAskPasswordStep(true)
      setLoginAskUsernameStep(false)
    } else {
      appendOutput('wrong username!')
    }
  }

  function initialLogin() {
    setUsername(promptInput.trim())
    setInitialLoginStep(false)
  }

  function askLoginPassword() {
    setPromptInput('')
    // TODO 
    // if user runs john from menu, show them password
    // if password is correct, update prompt label with path
    if ('correct password') {
      // ...
      setLoginAskPasswordStep(false)
    } else {
      appendOutput("wrong password!")
    }
    return
  }

  function processApp(app) {
    const result = run(app)
    if (result.output) {
      appendOutput(result)
    }
    if (result.openedConnection) {
      setPromptInput('')
      setPromptLabel('Login:')
      setLoginAskUsernameStep(true)
      return
    }
  }

  function processCommand() {
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

  function handleInputEnter(e) {
    if (e.key !== "Enter") return
    if (initialLoginStep) {
      initialLogin()
    }
    if (askLoginUsernameStep) {
      askLoginUsername()
    }
    if (askLoginPasswordStep) {
      askLoginPassword()
    }
    if (promptInput in appNames) {
      processApp(promptInput)
    }
    else {
      processCommand()
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
