'use strict';

class NetCoreConnector {
    constructor(ctx) {
        this.ctx = ctx;
    }

    getAllNodes() {
        return [
            {nameid: '123', nodeAddr: '127.0.0.1:7777', clientNums: 0, connectNums: 1},
            {nameid: '222', nodeAddr: '127.0.0.1:7778', clientNums: 2, connectNums: 2}
        ];
    }
};

module.exports = NetCoreConnector;