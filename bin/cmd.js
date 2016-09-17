#!/usr/bin/env node
var pkg = require('../package.json')
var path = require('path')

require('standard-engine').cli({
    version: pkg.version,
    homepage: pkg.homepage,
    bugs: pkg.bugs.url,
    eslint: require('eslint'),
    cmd: 'nonstandard', // should match the "bin" key in your package.json
    tagline: 'Minimal linting', // displayed in output --help
    eslintConfig: {
        configFile: path.join(__dirname, '../eslintrc.json')
    }
})
