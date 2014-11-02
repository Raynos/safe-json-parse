var Result = require('raynos-rust-result');

module.exports = SafeParseTuple

function SafeParseTuple(obj, reviver) {
    var json

    try {
        json = JSON.parse(obj, reviver);
    } catch (err) {
        return Result.Err(err);
    }

    return Result.Ok(json);
}
