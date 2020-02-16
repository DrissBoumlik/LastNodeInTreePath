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
            console.log(fromId, toId);
            // if toId is at the start  => add fromId before
            // else                     => push new record to paths

            // if fromId is at the end  => add toId after
            // els                      => push new record to paths
        }

    });
    console.log(paths);
    return node;
}


let result = lastNode(_startNode, _fromIds, _toIds);
console.log(result);
