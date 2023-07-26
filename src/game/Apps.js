import servers from "./servers";
export default class Apps {
  // host to IP
  DNS(host_name) {
    const { IP } = servers.find((server) => server.host === host_name);
    return IP;
  }
  // check server up
  Ping(IP) {}
  // open ports
  Nmap(IP) {}
  // connect to server
  Telnet(IP) {}
  // del file
  Delete(file_name) {}
  // copy file
  Copy(file_name) {}
  // Virus Creation Kit
  VCK() {}
}
