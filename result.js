var Result = require('rust-result');

module.exports = SafeParseTuple

function SafeParseTuple(obj, reviver) {
    var json

    try {
    		var parseData = JSON.stringify(obj);
        json = JSON.parse(parseData, reviver);
    } catch (err) {
        return Result.Err(err);
    }

    return Result.Ok(json);
}
