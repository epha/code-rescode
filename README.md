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
		var data = codes.create("ean13","4719512002889");
        
        res.setHeader("Content-Type","image/png");
		res.end( data );
        
        OR
        
        res.end("<html><img src='data:image/png;base64,"+data.toString("base64")+"' /></html>");
	}
	
Example loading specific barcode types
---------------------------------------
	var codes = require("rescode");

	function( res, req ) 
	{
		codes.loadModules(["ean13", "ean8"]);
		
		var data8 = codes.create("ean8","12345678");
        
        res.setHeader("Content-Type","image/png");
		res.end( data8 );
        
        OR
        
        res.end("<html><img src='data:image/png;base64,"+data8.toString("base64")+"' /></html>");
	}	
	
Example loading specific barcode types and setting specific options
--------------------------------------------------------------------
	var codes = require("rescode");

	function( res, req ) 
	{
		codes.loadModules(["ean13"], { "includetext":false, "guardwhitespace":false, "inkspread":0, scaleX:2, textyoffset:-15 });
		codes.loadModules(["ean8"], { "includetext":false, "guardwhitespace":false, "inkspread":0, scaleX:3, textyoffset:-15 });
		
		var data8 = codes.create("ean8","12345678");
        
        res.setHeader("Content-Type","image/png");
		res.end( data8 );
        
        OR
        
        res.end("<html><img src='data:image/png;base64,"+data8.toString("base64")+"' /></html>");
	}	
		
	
	rescode.loadModules(["ean13", "ean8"], { "includetext":false, "guardwhitespace":false, "inkspread":0, scaleX:2, textyoffset:-15 });


Configure
---------
	Choose in lib/codes.js the Adatper PNG ( binary png ) or Canvas ( dataURL (smaller size), but canvas has to be installed )
	Choose in lib/bwipp/index.js the Code Generators and Defaults
	