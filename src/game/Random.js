export default class Random {
  static Boolean() {
    return Math.random() < 0.5;
  }

  static IP() {
    return Array.from(
      { length: 4 },
      () => Math.floor(Math.random() * 255) + 1
    ).join(".");
  }

  static username() {
    let users = ["root", "guest", "user", "admin"];
    return users[Math.floor(Math.random() * users.length)];
  }

  static logs(n = 8) {
    const formatLogFile = () => [`${this.IP()}.log`, this.username()];

    return Array.from({ length: n }, () => formatLogFile()).concat([
      [`${this.IP()}.log`, "root"],
    ]);
  }
}
