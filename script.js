let _startNode = 6,
    _fromIds = [6, 5, 1, 4, 8, 9, 2, 7, 3],
    _toIds = [0, 9, 3, 7, 5, 4, 3, 6, 5];

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
    let _lastNode = paths.filter(function (path, index) {
        lastElement = path[path.length - 1];
        let isLastNode = paths.filter(function (path2, index2) {
            if (index !== index2) {
                if (path2.lastIndexOf(lastElement) !== -1 &&
                    lastElement !== path2[path2.length - 1]) {
                    return path;
                }
            }
        });
        if (!isLastNode.length) {
            return path;
        }
    });
    let first = _lastNode.pop();
    lastElement = first[first.length - 1];
    return lastElement;
}


let result = lastNode(_startNode, _fromIds, _toIds);
console.log(result);
