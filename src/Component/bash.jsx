import fs from "../game/fs";
import DirList from "./DirList";
import * as util from "../game/util";
import { appNames } from "./run";
import { TerminalAppHelp, TerminalCmdHelp } from "./TerminalHelp";

/**
	* parse and invoke commands + args
	* @param {string} input raw user input. 
	* @returns {{
	* output: (string|React.Component), 
	* path: string
	* }} 
	* `path`: used to update prompt-line label. 
	*
	* `output`: is appended to terminal interface
 */
export default function bash(commandInput) {
	const { command, arg } = util.parseCommand(commandInput);

	switch (command) {
		case "ls": {
			const { files, folders } = fs.list_dir();
			return { output: <DirList folders={folders} files={files} /> };
		}
		case "cd": {
			const changedDir = fs.change_dir(arg);
			if (changedDir) {
				const path = util.formatPromptPWD(fs.format_path());
				return { path };
			} else {
				return { output: "System cannot find the path specified because it does not exist." };
			}
		}
		case "cd..": {
			const changedDirUp = fs.change_dir_up();
			if (changedDirUp) {
				const path = util.formatPromptPWD(fs.format_path());
				return { path };
			} else {
				return { output: "Cannot go up from root directory." };
			}
		}
		case "del":
		case "rm": {
			const removed = fs.remove_file(arg);
			if (removed) {
				return { output: `Successfully deleted '${arg}'` };
			} else {
				return { output: `Cannot find file '${arg}'` };
			}
		}
		case "cls":
		case "clear": {
			return { clearOutput: true };
		}
		case "help": {
			return {
				output: (arg === '--app' || arg === '-app')
					? TerminalAppHelp
					: TerminalCmdHelp,
			};
		}
		default: {
			return {
				output: `'${command}' is not recognized as a command or program.`,
			};
		}
	}
}
