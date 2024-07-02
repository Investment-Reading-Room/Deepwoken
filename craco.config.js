//import { resolve } from "path";
const path = require('path');

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src/"),
            "@pages": path.resolve(__dirname, "src/pages/"),
            "@apis": path.resolve(__dirname, "src/apis/"),
            "@assets": path.resolve(__dirname, "src/assets/"),
            "@components": path.resolve(__dirname, "src/components/"),
            "@router": path.resolve(__dirname, "src/router/"),
        },
    },
    jest: {
        configure: {
            moduleNameMapper: {
                "^@(.*)$": "<rootDir>/src$1",
            },
        },
    },
};
