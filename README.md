Freebase-as-Promised
====================

A [bluebird.js](https://github.com/petkaantonov/bluebird/) wrapper around [Freebase](https://github.com/spencermountain/Freebase.js). It doesn't really add any functionality, just lets you use lovely Bluebird Promises to query Freebase.

Usage
=====

All of the original Freebase methods take the same signature, which is handy:

    freebase.<method>(searchTerm, options, callback);

This Promisified version is used like so:

    freebase.<method>(searchTerm[, options]); // returns Promise

This means you can use Bluebird's wonderful API on all the results:

    var freebase = require('freebase-as-promised');
    freebase.search('Thom Yorke').map(console.log);
