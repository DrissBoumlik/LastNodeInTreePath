let _startNode = 6,
    _fromIds = [3, 6, 2, 1, 4, 7, 5],
    _toIds = [4, 4, 3, 3, 5, 6, 7];

function lastNode(startNode, fromIds, toIds) {
    // let node = toIds.filter(function (toId, index) {
    //     return !fromIds.includes(toId);
    // });
    let paths = [];

    fromIds.forEach(function (fromId, index) {
        let toId = toIds[index];
        if (!paths.length) {
            paths.push(fromId + '' + toId);
        } else {
            if (paths.includes(toId)) {
                paths.push(fromId + '' + toId);
            }
            if (paths.includes(fromId)) {

            }
        }

    });
    return node;
}


let result = lastNode(_startNode, _fromIds, _toIds);
console.log(result);
