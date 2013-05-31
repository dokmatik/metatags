#!/usr/bin/env node

/**
 * Created with JetBrains WebStorm.
 * User: dokmatik
 * Date: 31.05.13
 * Time: 16:44
 * To change this template use File | Settings | File Templates.
 */

(function () {
    //Requiring files
    var fs = require('fs');
    var mt = require('./../lib/metatags');
    var readline = require('readline')
    var program = require('commander')

    var rl = readline.createInterface(process.stdin, process.stdout)

    rl.on('line', function (data) {
        //Reading files
        var stream = fs.createReadStream(data)
        mt.metatags(stream, function (result) {
            console.log(result)
        })
    })
    program.version('1.0.0')
        .parse(process.argv)

    // only process if arguments are provided
    if (program.args.length > 0) {
        program.args.forEach(function (a) {
            process.stdin.push(a)
            process.stdin.push('\n')
        })
        process.stdin.push(null)
    }

}).call(this)