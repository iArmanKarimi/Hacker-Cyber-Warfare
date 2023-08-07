export const bash = {
  errors: {
    cd: "System cannot find the path specified because it does not exist.",
    cdUp: "Cannot go up from root directory.",
    del: "Cannot find file",
    unrecognized: (cmd) =>
      `'${cmd}' is not recognized as a command or program.`,
  },
  info: {
    del: (file_name) => `Successfully deleted '${file_name}'`,
  },
};

export const app = {
  ping: {
    reply: (t) => `Reply from 1.1.1.1: bytes=32 time=${t}ms`,
    unreachable: "host unreachable",
    wrongIP: (IP) => `Ping request could not find IP '${IP}'`,
  },
  dns: {
    info: (hostname, IP) => `IP address of ${hostname}: ${IP}`,
  },
  nmap: {
    unkownHostName: "Unknown host name",
    unkownServerStatus: `Unknown server status`,
    info: (port, port_name) =>
      `${port_name} port is open. port number: ${port}`,
  },
  telnet: {
    wrongIPorPort: "cannot open connection. wrong ip address or port number",
  },
  copy: {
    copied: (file_name) => `Copied ${file_name}`,
    nonExistentFile: (file_name) => `${file_name} doesn't exist`,
  },
  john: {
    info: (password) => `Found password: ${password}`,
    wrongIPorPort: "Wrong ip address or port number",
  },
};
