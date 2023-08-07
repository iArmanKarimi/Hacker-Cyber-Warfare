import { parseCommandMultiArg } from '../game/util'
import Apps from '../game/Apps'
import fs from '../game/fs'
import { app as messages } from './util/terminalMessages'

export const appNames = ['ping', 'dns', 'nmap', 'telnet', "vck", "john"];

let pingResult = false; // server status

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
						return { output: messages.ping.reply.call(randomResponseTime) }
					} else {
						return { output: messages.ping.unreachable }
					}
				} else {
					return { output: messages.ping.wrongIP.call(IP) }
				}
			}

		case 'dns':
			{
				const hostname = args[0]
				const IP = Apps.DNS(hostname)
				return { output: messages.dns.info(hostname, IP) }
			}

		case 'nmap':
			{
				if (!pingResult) return messages.nmap.unkownServerStatus
				const IP = args[0]
				const result = Apps.Nmap(IP);
				if (!result) return messages.nmap.unkownHostName
				const { port, port_name } = result
				return { output: messages.nmap.info(port, port_name) }
			}

		case 'telnet':
			{
				if (args.length !== 2) break;
				let [IP, port] = args
				const connected = Apps.Telnet(IP, Number(port))
				if (connected) {
					return { openedConnection: true }
				} else {
					return { output: messages.telnet.wrongIPorPort }
				}
			}

		case 'copy':
			{
				const file_name = args[0]
				return {
					output: fs.file_exists(file_name)
						? messages.copy.copied
						: messages.copy.nonExistentFile
				}
			}

		case 'john': {
			if (args.length !== 2) break;
			const [IP, port] = args
			const password = Apps.John(IP, Number(port))
			return {
				output: password
					? messages.john.info(password)
					: messages.john.wrongIPorPort
			}
		}
	}
}
