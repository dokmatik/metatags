/**
 * Created with JetBrains WebStorm.
 * User: dokmatik
 * Date: 13.05.13
 * Time: 11:24
 * To change this template use File | Settings | File Templates.
 */
var mm = require('musicmetadata')
var noop = function () {
};

exports.metatags = function (inStream, callback) {
    if (inStream && inStream.push) {
        var parser = new mm(inStream);
        //listen for the metadata event
        parser.on('metadata', callback || noop)
            .on('done', function (err) {
                if (err)
                    console.log(err);
                inStream.destroy();
            });
    }

    return this
}

