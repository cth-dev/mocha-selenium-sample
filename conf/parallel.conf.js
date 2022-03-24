LT_USERNAME = process.env.LT_USERNAME || "tszhin.chan";
LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "7SFDwQqwQmQNs6VrdTtVVpsIYe27teVxaHgtCnbfZVUeLL6ldO";

var config = {
  commanCapabilities: {
    build: "Mocha-Selenium-Sample", //Build name
    tunnel: false // Make it true to run the localhost through tunnel
  },
  multiCapabilities: [
    {
      // Desired capabilities
      name: "Your Test Name", // Test name
      platform: "Windows 10", // OS name
      browserName: "Chrome",
      version: "92.0",
      resolution: "1920x1080",
      visual: false, // To take step by step screenshot
      network: false, // To capture network Logs
      console: false // To capture console logs.
    },
    {
      name: "Your Test Name", // Test name
      platform: "Windows 10", // OS name
      browserName: "Firefox",
      version: "99.0",
      resolution: "1920x1080",
      visual: false, // To take step by step screenshot
      network: false, // To capture network Logs
      console: false // To capture console logs.
    },
    {
      name: "Your Test Name", // Test name
      platform: "MacOS Monterey", // OS name
      browserName: "Safari",
      version: "15.0",
      resolution: "1920x1080",
      visual: false, // To take step by step screenshot
      network: false, // To capture network Logs
      console: false // To capture console logs.
    }
  ]
};

exports.capabilities = [];
// Code to support common capabilities
config.multiCapabilities.forEach(function (caps) {
  var temp_caps = JSON.parse(JSON.stringify(config.commanCapabilities));
  for (var i in caps) temp_caps[i] = caps[i];
  exports.capabilities.push(temp_caps);
});