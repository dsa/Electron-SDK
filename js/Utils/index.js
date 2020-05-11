"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deprecate = (replaceApi) => {
    console.warn('This method will be deprecated soon. ', replaceApi ? `Please use ${replaceApi} instead` : '');
};
