import Apps from "./Apps.js";

// Define the IP address and host we want to use for testing
const IP = "20.112.250.133";
const host = "www.microsoft.com";

// Define the expected results for each test
const dnsExpected = "20.112.250.133";
const nmapExpected = { port: 22, port_name: "SSH" };
const telnetopenExpected = true;
const telnetExpected = true;

// Test the DNS function
const dnsResult = Apps.DNS(host);
if (dnsResult === dnsExpected) {
  console.log("DNS test passed");
} else {
  console.error(
    `DNS test failed: expected ${dnsExpected}, but got ${dnsResult}`
  );
}

// Test the Ping function
const pingResult = Apps.Ping(IP);
console.log("Ping test:", pingResult ? "server is up" : "server down");

// Test the Nmap function
const nmapResult = Apps.Nmap(IP);
if (
  nmapResult.port === nmapExpected.port &&
  nmapResult.port_name === nmapExpected.port_name
) {
  console.log("Nmap test passed");
} else {
  console.error(
    `Nmap test failed: expected ${JSON.stringify(
      nmapExpected
    )}, but got ${JSON.stringify(nmapResult)}`
  );
}

// Test the TelnetOpen function
const telnetopenResult = Apps.TelnetOpen(IP, 22);
if (telnetopenResult === telnetopenExpected) {
  console.log("Telnet.Open test passed");
} else {
  console.error(
    `Telnet.Open test failed: expected ${telnetopenExpected}, but got ${telnetopenResult}`
  );
}

// Test the Telnet function
const telnetResult = Apps.Telnet(IP, "billion_gates");
if (telnetResult === telnetExpected) {
  console.log("Telnet test passed");
} else {
  console.error(
    `Telnet test failed: expected ${telnetExpected}, but got ${telnetResult}`
  );
}
