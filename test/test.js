/**
 * Created with JetBrains WebStorm.
 * User: dokmatik
 * Date: 31.05.13
 * Time: 17:07
 * To change this template use File | Settings | File Templates.
 */

var assert = require("assert")
    , fs = require('fs')

var metatags = require('../lib/metatags').metatags

describe('MP3 tags', function () {
    it('should not crash when no file is given', function () {
        metatags()
    }),
        it('should not crash when no valid stream is given', function () {
            metatags('this is no stream object')
        })
    it('should read full tags when valid mp3 file is given', function () {
        var mp3 = fs.createReadStream(__dirname + '/x.mp3')
        var done = function (result) {
            assert.equal('Storm (Sidit)', result.title)
        }
        metatags(mp3, done)
    })
})
