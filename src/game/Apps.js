import Random from "./Random.js";
import servers from "./servers.js";
import fs from "./fs";

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
   * @param {string} IP
   * @returns {{ validIP: boolean, status: boolean}} is server up
   */
  static Ping(IP) {
    return {
      status: Random.Boolean(),
      validIP: servers.some((server) => server.IP === IP),
    };
  }

  /** check open ports
   * @param {string} IP
   * @returns {{port: number, port_name: string}} port object
   */
  static Nmap(IP) {
    const server = servers.find((server) => server.IP === IP);
    if (!server) return undefined;
    return { port: server.port, port_name: server.port_name };
  }

  /** connect to server.
   * @param {string} IP
   * @param {string} password
   * @returns {boolean}
   */
  static Login(IP, password) {
    const server = servers.find((server) => server.IP === IP);
    const isPassword = server.password === password;
    if (isPassword) {
      fs.set_host = server.host;
    }
    return isPassword;
  }

  // check IP port before asking password
  static Telnet(IP, port) {
    const server = servers.find((server) => server.IP === IP);
    return server?.port === port;
  }

  static John(IP) {
    const server = servers.find((server) => server.IP === IP);
    return server.password;
  }
}
