var Promise = require('bluebird');
var freebase = require('freebase');
var freebaseAsPromised = {};

Object.keys(freebase).forEach(function(name) {
    var method = freebase[name];

    freebaseAsPromised[name] = function(term, options) {
        return new Promise(function(resolve) {
            return method.call(freebase, term, options || {}, resolve);
        });
    };
});

module.exports = freebaseAsPromised;
