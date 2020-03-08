let _startNode = 1,
    _fromIds = [11, 6, 5, 15, 2, 1, 3, 1, 7, 2, 14, 10, 16, 0, 2, 3, 1, 18, 13],
    _toIds = [12, 9, 7, 16, 8, 10, 5, 3, 13, 14, 15, 11, 17, 1, 6, 4, 2, 3, 18];
let _passedNodes = [];

let lastNodesResult = lastNodes(_startNode, _fromIds, _toIds);
setTimeout(() => {
    console.clear(); // clearing all browser extension warning/errors messages
    console.log(lastNodesResult);
}, 500);


function getLastNodes(node, fromIds, toIds) {
    let result = [];
    if (_passedNodes.includes(node)) {
        result.push(node);
        return result;
    }
    _passedNodes.push(node);
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
    let _lastNodes = undefined;
    do {
        arrayExists = true;
        _lastNodes = results.flat();
        results = _lastNodes.filter(function (element) {
            return Array.isArray(element);
        });
        if (!results.length) {
            arrayExists = false;
        }

    } while (arrayExists);
    return _lastNodes;
}
