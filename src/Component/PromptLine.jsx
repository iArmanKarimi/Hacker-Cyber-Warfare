import "./css/PromptLine.css";
import { useState } from "react";
import PropTypes from "prop-types";
import bash from "./bash";
import { appNames, run } from "./run";

function PromptLine({ clearOutput, appendOutput }) {
	const [state, setState] = useState({
		username: "",
		promptInput: "",
		promptLabel: "Login:",
		askLoginUsernameStep: true,
		askLoginPasswordStep: false,
		initialLoginStep: true,
	});

	const {
		username,
		promptInput,
		promptLabel,
		askLoginUsernameStep,
		askLoginPasswordStep,
		initialLoginStep,
	} = state;

	function askLoginUsername() {
		if (promptInput === "root") {
			appendOutput(`Login: ${username}`);
			setState((prevState) => ({
				...prevState,
				promptLabel: "Password:",
				askLoginPasswordStep: true,
				askLoginUsernameStep: false,
			}));
		} else {
			appendOutput("wrong username!");
		}
	}

	function initialLogin() {
		setState((prevState) => ({
			...prevState,
			username: promptInput.trim(),
			initialLoginStep: false,
		}));
	}

	function askLoginPassword() {
		const result = run(promptInput);
		if (result.output) appendOutput(result.output);
		if (result.success)
			setState((prevState) => ({
				...prevState,
				promptLabel: "/home/user",
				askLoginPasswordStep: false,
				askLoginUsernameStep: false,
			}));
	}

	function processApp(app) {
		const result = run(app);
		if (result.output) appendOutput(result.output);
		if (result.openedConnection)
			setState((prevState) => ({
				...prevState,
				promptInput: "",
				promptLabel: "Login:",
				askLoginUsernameStep: true,
			}));
	}

	function processCommand() {
		const result = bash(promptInput);
		if (result.path)
			setState((prevState) => ({ ...prevState, promptLabel: result.path }));
		if (result.clearOutput) clearOutput();
		if (result.output) appendOutput(result.output);
	}

	function handleInputEnter(e) {
		if (e.key !== "Enter") return;

		const stepFunctions = {
			[initialLoginStep]: initialLogin,
			[askLoginUsernameStep]: askLoginUsername,
			[askLoginPasswordStep]: askLoginPassword,
			[promptInput in appNames]: () => processApp(promptInput),
			default: processCommand,
		};

		const stepFunction =
			stepFunctions[
			initialLoginStep
			|| askLoginUsernameStep
			|| askLoginPasswordStep
			|| promptInput in appNames]
			|| stepFunctions.default;

		stepFunction();
		setState((prevState) => ({ ...prevState, promptInput: "" }));
	}

	return (
		<div id="prompt-line-prompt">
			<span id="prompt-line-prompt">{promptLabel}</span>
			<input
				type="text"
				id="prompt-line-input"
				value={promptInput}
				onChange={(e) =>
					setState((prevState) => ({
						...prevState,
						promptInput: e.target.value,
					}))
				}
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
