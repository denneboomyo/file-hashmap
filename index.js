#!/usr/bin/env node

var program = require("commander");
var path = require("path");
var fs = require("fs");
var readDir = require("fs-readdir-recursive");
var crypto = require("crypto");

program
    .version("1.0.0")
    .usage("file-hashmap")
    .option("-d, --dir [value]", "Target directory <path>")
    .option("-o, --output [value]", "Output file <path>", "file-hashes.json")
    .parse(process.argv);

if (!program.dir) {
    console.log("The target directory path is required. -h for help");
} else {
    try {
        var ret = {};
        var files = readDir(program.dir);

        for (let i = 0; i < files.length; i++) {
            var file = files[i];
            var content = fs.readFileSync(path.join(program.dir, file));
            ret[file.replace(/\\/g, "/")] = crypto.createHash("md5").update(content).digest("hex");
        }

        fs.writeFileSync(program.output, JSON.stringify(ret));
    } catch (err) {
        dumpError(err);
    }
}

function dumpError(err) {
    if (typeof err === "object") {
        if (err.message) {
            console.log("\nMessage: " + err.message)
        }
        if (err.stack) {
            console.log("\nStacktrace:")
            console.log("====================")
            console.log(err.stack);
        }
    } else {
        console.log("dumpError :: argument is not an object");
    }
}
