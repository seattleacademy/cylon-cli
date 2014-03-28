"use strict";

var path = require('path'),
    os = require('os'),
    fs = require('fs'),
    process = require('./../process');

module.exports = {
  usage: "digispark [subcommand]",

  description: "Set udev rules, and upload the Littlewire protocol to your Digispark",

  action: function(args) {
    args = args.slice();

    var subcommand = args.shift(),
        platform = os.platform();

    var printUsage = function() {
      console.log("Usage:");
      console.log("  cylon digispark set-udev-rules");
      console.log("  cylon digispark upload");
    };

    if (["set-udev-rules", "upload"].indexOf(subcommand) === -1) {
      console.log("No/unrecognized subcommand.");
      printUsage();
      return;
    }

    switch (subcommand) {
      case 'upload':
        var command = path.join(__dirname, "support/digispark/littlewireLoader_v13");

        switch(platform) {
          case 'linux':
            if (this.setUdevRules()) {
              setTimeout(function() { process.spawn(command, []); }, 5000);
            } else {
              process.spawn(command, []);
            }
            break;

          case 'darwin':
            process.spawn(command, []);
            break;

          default:
            console.log("OS not yet supported.");
        }
        break;

      case 'set-udev-rules':
        if (platform === 'linux') {
          this.setUdevRules(true);
        } else {
          console.log("OS not yet supported.");
        }
        break;
    }
  },

  setUdevRules: function(force) {
    if (force == null) force = false;

    var source = path.join(__dirname, "support/digispark/micronucleus.rules"),
        dest = '/etc/udev/rules.d/49-micronucleus.rules';

    if (!fs.existsSync(dest) || force) {
      process.spawn('sudo', ['cp', source, dest]);
      return true;
    }

    return false;
  }
};