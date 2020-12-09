module.exports = function (config) {
  config.set({
    frameworks: ["mocha", "chai"],
    files: [
      { pattern: "./node_modules/stimulus/dist/stimulus.umd.js" },
      { pattern: "./details-menu.js", type: "module", nocache: true },
      { pattern: "./details-menu.test.js", type: "module", nocache: true },
    ],
    reporters: ["mocha"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ["ChromeHeadless"],
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
  });
};
