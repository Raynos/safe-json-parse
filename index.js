var maybeCallback = require("continuable/maybe-callback")

module.exports = maybeCallback(SafeParse)

function SafeParse(obj, reviver) {
    return function (callback) {
        var json

        try {
            json = JSON.parse(obj, reviver)
        } catch (err) {
            return callback(err)
        }

        callback(null, json)
    }
}
