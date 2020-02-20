let _startNode = 6,
    _fromIds = [11, 6, 5, 2, 1, 3, 1, 10, 0, 2, 3, 1],
    _toIds = [12, 9, 7, 8, 10, 5, 3, 11, 1, 6, 4, 2];

function getLastNodes(node, fromIds, toIds) {
    let result = [];
    fromIds.forEach(function (fromId, index) {
        if (node === fromId) {
            // let object = {};
            // object[node] = getLastNodes(toIds[index], fromIds, toIds);
            // result.push(object);
            result.push(getLastNodes(toIds[index], fromIds, toIds));
            // result.push(node, getLastNodes(toIds[index], fromIds, toIds));
        }
    });
    if (!result.length) {
        result.push(node);
    }
    return result;
    // return result;
}

function lastNodes(startNode, fromIds, toIds) {
    let results = getLastNodes(startNode, fromIds, toIds);

    let arrayExists = undefined;
    let copyResults = undefined;
    do {
        arrayExists = true;
        copyResults = results.flat();
        results = copyResults.filter(function (element) {
            return Array.isArray(element);
        });
        if (!results.length) {
            arrayExists = false;
        }

    } while (arrayExists);
    return copyResults;
}


let results = lastNodes(_startNode, _fromIds, _toIds);
console.log(results);
