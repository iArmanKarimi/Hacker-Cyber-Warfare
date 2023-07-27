import servers from "./servers.js";
import Random from "./Random.js";
export const appsUImeta = {
  Ping: {
    prompt: 'Ping>',
    message: "Enter IP...",
  },
}
export default class Apps {
  /** host to IP
   * @param {string} host_name
   * @returns {string} IP
   */
  static DNS(host_name) {
    const server = servers.find((server) => server.host === host_name);
    return server?.IP;
  }

  /** check if server is up
   * @returns {boolean} is server up
   */
  static Ping() {
    return Random.Boolean();
  }

  /** check open ports
   * @param {string} IP
   * @returns {{port: number, port_name: string}|undefined} port object
   */
  static Nmap(IP) {
    const server = servers.find((server) => server.IP === IP);
    if (!server) return undefined;
    return { port: server.port, port_name: server.port_name };
  }

  /** connect to server.
   * check ip/port with TelnetOpen()
   * @param {string} IP
   * @param {number} port
   * @param {string} password
   * @returns {boolean} is connected
   */
  static Telnet(IP, password) {
    const server = servers.find((server) => server.IP === IP);
    return server.password === password;
  }

  // check IP port before asking password
  static TelnetOpen(IP, port) {
    const server = servers.find((server) => server.IP === IP);
    return server?.port === port;
  }
}
