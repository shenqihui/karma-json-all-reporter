// var os = require('os');
var path = require('path');
var fs = require('fs');


var JsonAllReporter = function(baseReporterDecorator, config, logger, helper, formatError) {
  logger.create('reporter.json-all');
  var reporterConfig = config.jsonAllReporter || {};
  var outputFile = helper.normalizeWinPath(path.resolve(config.basePath, reporterConfig.outputFile || 'json-all-results.json'));

  var suites = {};

  function buildSuite(browser, type, value) {
    // debugger;
    suites[browser.id] = suites[browser.id] || {};
    suites[browser.id]['id'] = suites[browser.id]['id'] || browser.name || '';
    suites[browser.id]['name'] = suites[browser.id]['name'] || browser.name || '';
    suites[browser.id]['fullname'] = suites[browser.id]['fullname'] || browser.name || '';
    suites[browser.id][type] = suites[browser.id][type] || [];
    suites[browser.id][type].push(value);
  }

  this.onRunStart = function(browsers) {
    // debugger;
  };

  this.write = function () {
    // debugger;
  };

  this.writeCommonMsg = this.write;

  this.onBrowserError = function (browser, error) {
    buildSuite(browser, 'error', error);
  };

  this.onBrowserLog = function (browser, log, type) {
    buildSuite(browser, 'log', log);
  };

  this.onBrowserComplete = function(browser) {
    // debugger;
  };

  this.onSpecComplete = function (browser, result) {
    // debugger;
    buildSuite(browser, 'spec', result);
  };

  this.onRunComplete = function() {
    // debugger;
    console.log(suites);
    var writeStr = JSON.stringify(suites, null, 4);
    var fd = fs.openSync(outputFile, 'w+');
    fs.write(fd, writeStr, 0, 'utf8', function() {
      fs.close(fd);
    });
    suites = {};
  };

  this.specSuccess = function(browser, result) {
    buildSuite(browser, 'spec_success', result);
  };

  this.specSkipped = function(browser, result) {
    buildSuite(browser, 'spec_skipped', result);
  };

  this.specFailure = function(browser, result) {
    buildSuite(browser, 'spec_failure', result);
  };

  this.onExit = function(done) {
    suites.karma = done;
    // debugger;
  };
};

JsonAllReporter.$inject = ['baseReporterDecorator', 'config', 'logger', 'helper', 'formatError'];

// PUBLISH DI MODULE
module.exports = {
  'reporter:json-all': ['type', JsonAllReporter]
};
