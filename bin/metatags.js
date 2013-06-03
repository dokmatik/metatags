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
    var carrier = require('carrier')
    var program = require('commander')

    process.stdin.resume()
    process.stdin.setEncoding('utf8')
    var rl = carrier.carry(process.stdin)

    rl.on('line', function (data) {
        //Reading files
        var stream = fs.createReadStream(data)
        mt.metatags(stream, function (result) {
            result.file = data
            console.log(JSON.stringify(result))
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