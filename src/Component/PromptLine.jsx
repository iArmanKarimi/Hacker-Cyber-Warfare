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
		isServerUsernameRequested: true,
		isServerPasswordRequested: false,
		isInitialLogin: true,
	});

	const {
		username,
		promptInput,
		promptLabel,
		isServerUsernameRequested,
		isServerPasswordRequested,
		isInitialLogin,
	} = state;

	function askServerUsername() {
		if (promptInput === "root") {
			appendOutput(`Login: ${username}`);
			setState((prevState) => ({
				...prevState,
				promptLabel: "Password:",
				isServerPasswordRequested: true,
				isServerUsernameRequested: false,
			}));
		} else {
			appendOutput("wrong username!");
		}
	}

	function initialLogin() {
		setState((prevState) => ({
			...prevState,
			username: promptInput.trim(),
			isInitialLogin: false,
		}));
	}

	function askServerPassword() {
		const result = run(promptInput);
		if (result.output) appendOutput(result.output);
		if (result.success)
			setState((prevState) => ({
				...prevState,
				promptLabel: "/home/user",
				isServerUsernameRequested: false,
				isServerPasswordRequested: false,
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
				isServerUsernameRequested: true,
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
			[isInitialLogin]: initialLogin,
			[isServerUsernameRequested]: askServerUsername,
			[isServerPasswordRequested]: askServerPassword,
			[promptInput in appNames]: () => processApp(promptInput),
			default: processCommand,
		};

		const stepFunction =
			stepFunctions[
			isInitialLogin
			|| isServerUsernameRequested
			|| isServerPasswordRequested
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
