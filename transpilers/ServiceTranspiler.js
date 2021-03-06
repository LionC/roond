var fnUtil = require('../functionUtil.js');

module.exports = serviceTranspiler;

function serviceTranspiler(componentFunc, componentName) {
  var injects = fnUtil.getFunctionParameters(componentFunc);

  var ret = [
    "angular.module('" + _module + "')",
    ".service([",
    injects.map(function(inject) { return "    '" + inject + "'," }).join("\n"),
    "    " + componentName,
    "])",
    "",
    "function " + componentName + "(" + injects.join(", ") + ") {" + fnUtil.getFunctionBody(componentFunc) + "}",
  ].join('\n');

  return ret;
}
