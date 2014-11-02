'use strict';

/**
 * Testing lib/codes.js
 * @type {exports}
 */

var assert = require('assert'),
	codes = require("../lib/codes");

describe('Codes.js Test', function() {

	it('should be able to load barcode types', function() {

		// Order matters
		codes.loadModules(["ean2", "ean5", "ean8", "ean13"]);

		var expectedOutput = require('./testOutput/barcode'),
			data8 = codes.create("ean8","12345678"),
			base64String = data8.toString('base64');

		assert.equal(base64String, expectedOutput);
	});

	it('loading ean barcode types and setting specific options', function() {

		codes.loadModules(["ean8"], { "includetext":false, "guardwhitespace":false, "inkspread":0, scaleX:3, textyoffset:-15 });

		var expectedOutput = require('./testOutput/barcodeWithOptions'),
			data8 = codes.create("ean8","12345678"),
			base64String = data8.toString('base64');

		assert.equal(base64String, expectedOutput);
	});

	it('loading a qr code', function() {

		codes.loadModules(["qrcode"], { "eclevel":"M" , "version": "4", "scaleX": 2, "scaleY": 2} );

		var expectedOutput = require('./testOutput/qrCode'),
			data = codes.create("qrcode","http://npmjs.org"),
			base64String = data.toString('base64');

		assert.equal(base64String, expectedOutput);
	});
});