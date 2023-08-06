import { parseCommandMultiArg } from '../../game/util'
import Apps from '../../game/Apps'
import fs from '../../game/fs'

export const appNames = ['ping', 'dns', 'nmap', 'telnet', "vck", "john"];

let pingResult = false; // for game staging (player must ping first)

/**
 * @param {string} commandArgs 
 * second user input. command is prepended (except for telnet)
 * example: `ping 0.0.0.0`
 */
export function run(commandArgs) {
	// by default it's the args for command.
	// but first one can be command "open" + args.
	const { command, args } = parseCommandMultiArg(commandArgs)

	/**
	 * commands that don't require args are handled 
	 * by load() which is the first stage.
	 */
	if (args.length < 1)
		return ''

	switch (command) {
		case 'ping':
			{
				const IP = args[0]
				const { status, validIP } = Apps.Ping(IP)
				pingResult = status;
				if (validIP) {
					if (status) {
						const randomResponseTime = Math.floor(Math.random() * (800 - 8 + 1)) + 8
						return { output: `Reply from 1.1.1.1: bytes=32 time=${randomResponseTime}ms` }
					} else {
						return { output: <p style={{ color: 'darkred' }}>host unreachable</p> }
					}
				} else {
					return { output: `Ping request could not find IP '${IP}'` }
				}
			}

		case 'dns':
			{
				const hostname = args[0]
				const IP = Apps.DNS(hostname)
				return { output: `IP address of ${hostname}: ${IP}` }
			}

		case 'nmap':
			{
				if (!pingResult) return `Unknown server status`
				const IP = args[0]
				const result = Apps.Nmap(IP);
				if (!result) return "Unknown host name"
				const { port, port_name } = result
				return { output: `${port_name} port is open. port number: ${port}` }
			}

		case 'telnet':
			{
				if (args.length !== 2) break;
				let [IP, port] = args
				const connected = Apps.Telnet(IP, Number(port))
				if (connected) {
					return { openedConnection: true }
				} else {
					return { output: 'cannot open connection. wrong ip address or port number' }
				}
			}

		case 'copy':
			{
				const file_name = args[0]
				return {
					output: fs.file_exists(file_name)
						? `Copied ${file_name}`
						: `${file_name} doesn't exist`
				}
			}

		case 'john': {
			if (args.length !== 2) break;
			const [IP, port] = args
			const password = Apps.John(IP, Number(port))
			return {
				output: password
					? `Found password: ${password}`
					: 'Wrong ip address or port number'
			}
		}
	}
}
