let _startNode = 6,
    _fromIds =  [5, 1, 4, 8, 9, 2, 5, 3, 7],
    _toIds =    [9, 3, 7, 5, 4, 3, 9, 5, 9];

function lastNode(startNode, fromIds, toIds) {
    // let node = toIds.filter(function (toId, index) {
    //     return !fromIds.includes(toId);
    // });
    let paths = [];

    fromIds.forEach(function (fromId, index) {
        let pushNew = undefined;
        let toId = toIds[index];
        if (!paths.length) {
            paths.push(fromId + '' + toId);
        } else {
            paths = paths.map(function (path, index) {
                pushNew = false;
                if (path[0] === toId.toString()) {
                    path = fromId + path;
                } else {
                    pushNew = true;
                }
                if (path[path.length - 1] === fromId.toString()) {
                    path = path + toId;
                } else {
                    pushNew = true;
                }
                return path;
            });
            if (pushNew) {
                paths.push(fromId + '' + toId);
            }
            // if toId is at the start  => add fromId before
            // else                     => push new record to paths

            // if fromId is at the end  => add toId after
            // else                     => push new record to paths
        }

    });
    console.log(paths);
    let _lastNode = paths.reduce(function (a, b) {
        return b.length > a.length ? b : a;
    });
    return _lastNode[_lastNode.length - 1];
}


let result = lastNode(_startNode, _fromIds, _toIds);
console.log(result);
