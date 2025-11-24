module.exports = {
  default: {
    require: ["src/steps/*.js", "src/support/*.js"],
    paths: ["src/features/*.feature"],
    format: ["progress"],
    publishQuiet: true
  }
};

