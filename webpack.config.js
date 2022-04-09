const path = require("path");

module.exports = {
    resolve: {
        alias: {
            selectors: path.resolve(__dirname, "./cypress/selectors"),
        },
    },
};
