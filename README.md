Codes
=========
Notice that I am not the author of the code, I am just the creator of an npm module out of the great library from https://code.google.com/p/bwip-js/.

Install
---------
	npm install rescode
	
Example
--------
	var codes = require("rescode");

	function( res, req ) 
	{
		codes.create("ean13","4719512002889");
		res.end( data );
	}

Configure
---------
	Choose in lib/codes.js the Adatper PNG ( binary png ) or Canvas ( dataURL )
	Choose in lib/bwipp/index.js the Code Generator and Defaults
	