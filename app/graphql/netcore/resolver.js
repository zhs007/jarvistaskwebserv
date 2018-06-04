'use strict';

module.exports = {
    Query: {
        nodes(root, {}, ctx) {
            return ctx.connector.netcore.getAllNodes();
        },
    },
};