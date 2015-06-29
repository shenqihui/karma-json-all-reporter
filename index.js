var os = require('os');
var path = require('path');
var fs = require('fs');


var JsonAllReporter = function(baseReporterDecorator, config, logger, helper, formatError) {
  var log = logger.create('reporter.json-all');
  var reporterConfig = config.jsonAllReporter || {};
  var outputFile = helper.normalizeWinPath(path.resolve(config.basePath, reporterConfig.outputFile || 'json-all-results.json'));


  this.onRunStart = function(browsers) {
    console.log(arguments);
  };

  this.onBrowserStart = function(browser) {
    console.log(arguments);
  };

  this.renderBrowser = function (browser) {
    console.log(arguments);
  };

  this.renderBrowser = this.renderBrowser.bind(this);

  this.write = function () {
    console.log(arguments);
  };

  this.writeCommonMsg = this.write;

  this.onBrowserError = function (browser, error) {
    console.log(arguments);
  };

  this.onBrowserLog = function (browser, log, type) {
    console.log(arguments);
  };

  this.onBrowserComplete = function(browser) {
    console.log(arguments);
  };

  this.onSpecComplete = function (browser, result) {
    console.log(arguments);
  };

  this.specSuccess = this.specSkipped = function () {
    console.log(arguments);
  };

  this.specFailure = function (browser, result) {
    console.log(arguments);
  };

  this.onRunComplete = function() {
    console.log(arguments);
  };

  this.specSuccess = this.specSkipped = this.specFailure = function(browser, result) {
    console.log(arguments);
  };

  // wait for writing all the xml files, before exiting
  this.onExit = function(done) {
    console.log(arguments);
  };
};

JsonAllReporter.$inject = ['baseReporterDecorator', 'config', 'logger', 'helper', 'formatError'];

// PUBLISH DI MODULE
module.exports = {
  'reporter:json-all': ['type', JsonAllReporter]
};
