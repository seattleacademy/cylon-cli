{
  "name": "<%= adaptorName %>",
  "version": "0.1.0",
  "main": "lib/<%= adaptorName %>.js",
  "description": "Cylon module for <%= adaptorClassName %>",
  "homepage": "http://cylonjs.com",
  "bugs": "Your bug report URL here",

  "author": "Your Name Here <your@email.here> (your.url.here)",

  "repository": {
    "type": "git",
    "url": "your git URL here"
  },

  "license": "your license type here",

  "devDependencies": {
    "sinon-chai": "2.5.0",
    "chai":       "1.9.1",
    "mocha":      "1.18.2",
    "sinon":      "1.9.1",
    "jshint":     "2.5.0"
  },

  "peerDependencies": {
    "cylon": ">=<%= cylonVersion %> < 1"
  },

  "dependencies": {
    "cylon": "~<%= cylonVersion %>"
  }
}
