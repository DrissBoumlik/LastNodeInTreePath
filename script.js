let _startNode = 6,
    _fromIds = [5, 1, 4, 8, 9, 2, 3, 7],
    _toIds = [9, 3, 7, 5, 4, 3, 5, 6];

function lastNode(startNode, fromIds, toIds) {
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
                } else if (path[path.length - 1] === fromId.toString()) {
                    path = path + toId;
                } else {
                    pushNew = !path.includes(fromId + '' + toId);
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
    let lastElement;
    let _lastNode = paths.some(function (path, index) {
        lastElement = path[path.length - 1];
        let _lastElement;
        let isLastNode = paths.some(function (path2, index2) {
            if (index !== index2) {
                debugger
                if (path2.lastIndexOf(lastElement) !== -1 &&
                    path2.lastIndexOf(lastElement) !== path2[path2.length - 1]) {
                    _lastElement = lastElement;
                    return path;
                }
            }
        });
        if (_lastElement === undefined) {
            return lastElement;
        }
    });
    if (_lastNode) {
        return lastElement;
    }
}


let result = lastNode(_startNode, _fromIds, _toIds);
console.log(result);
