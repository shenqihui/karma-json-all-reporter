# karma-json-all-reporter

> Reporter for the JUnit XML format.

## Installation

The easiest way is to keep `karma-json-all-reporter` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-json-all-reporter": "~0.1"
  }
}
```

You can simple do it by:
```bash
npm install karma-json-all-reporter --save-dev
```

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    reporters: ['progress', 'json-all'],

    // the default configuration
    json-allReporter: {
      outputDir: '', // results will be saved as $outputDir/$browserName.xml
    }
  });
};
```

You can pass list of reporters as a CLI argument too:
```bash
karma start --reporters json-all,dots
```

----

For more information on Karma see the [homepage].


[homepage]: http://karma-runner.github.com
