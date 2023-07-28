export const formatPromptPWD = (pwd) => `[ root~${pwd}/ ] #`;

export function parseCommand(input) {
  const inputArray = input.trim().split(/\s+/);
  const command = inputArray.shift();
  // commands have only 1 arg, unlike an App like Telnet
  const arg = inputArray.shift();
  return { command, arg };
}

/**
 * @param {string} input
 * @returns {{command: string, args: string[]}} 
 */
export function parseCommandMultiArg(input) {
  const inputArray = input.trim().split(/\s+/);
  const command = inputArray.shift();
  const args = inputArray;
  return { command, args };
}
