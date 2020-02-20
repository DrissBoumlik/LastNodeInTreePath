let _fromIds = [6, 5, 1, 0, 8, 9, 2, 9, 3],
    _toIds = [0, 9, 3, 7, 5, 4, 3, 6, 5];

function lastNodes(fromIds, toIds) {
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
        }

    });
    console.log(paths);
    let lastElement;
    let _lastNode = paths.filter(function (path, index) {
            lastElement = path[path.length - 1];
            let isLastNode = paths.filter(function (path2, index2) {
                // if(path === '9607' && path2 === '07') debugger
                if (index2 < index) {
                    return (path2.lastIndexOf(lastElement) !== -1 &&
                        lastElement !== path2[path2.length - 1]) ||
                        (path.indexOf(path2) !== -1 || path2.indexOf(path) !== -1);
                }
            });
            if (!isLastNode.length) {
                return path;
            }
        }
    );
    console.log(_lastNode);
    // TODO => test common index on all result strings then see the farthest one from the end node
    lastElement = _lastNode.map(function (path, index) {
        return path[path.length - 1];
    });
    lastElement = Array.from(new Set(lastElement));
    return lastElement;
}


let result = lastNodes(_fromIds, _toIds);
console.log(result);
