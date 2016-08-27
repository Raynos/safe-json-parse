module.exports = SafeParseTuple

function SafeParseTuple(obj, reviver) {
    var json
    var error = null

    try {
    		var parseData = JSON.stringify(obj);
        json = JSON.parse(parseData, reviver)
    } catch (err) {
        error = err
    }

    return [error, json]
}
