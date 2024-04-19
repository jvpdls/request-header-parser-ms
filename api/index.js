module.exports = class API {
  static showRequestHeaders(req, res) {
    const ip = req.ip;
    const language = req.headers["accept-language"];
    const software = req.headers["user-agent"];
    const os = software.match(/\(([^)]+)\)/)[1];
    res.json({ ip, language, software, os });
  }
};
