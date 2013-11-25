Codes
=========
Notice that I am not the author of the code, I am just the creator of an npm module out of the great library from https://code.google.com/p/bwip-js/.

Install
---------
	npm install rescode	
	
Example loading specific barcode types
---------------------------------------
	var codes = require("rescode");

	function( res, req ) 
	{
		codes.loadModules(["ean13", "ean8", "ean5", "ean2"]);
		
		var data8 = codes.create("ean8","12345678");
        
        res.setHeader("Content-Type","image/png");
		res.end( data8 );
        
        OR
        
        res.end("<html><img src='data:image/png;base64,"+data8.toString("base64")+"' /></html>");
	}	
	
Example loading ean barcode types and setting specific options
--------------------------------------------------------------------
	var codes = require("rescode");

	function( res, req ) 
	{
		codes.loadModules(["ean13", "ean5", "ean2"]);		
        codes.loadModules(["ean8"], { "includetext":false, "guardwhitespace":false, "inkspread":0, scaleX:3, textyoffset:-15 });
		        
		var data8 = codes.create("ean8","12345678");
        
        res.setHeader("Content-Type","image/png");
		res.end( data8 );
        
        OR
        
        res.end("<html><img src='data:image/png;base64,"+data8.toString("base64")+"' /></html>");
	}	
		
Example loading qrcode
----------------------------------------------------------------------------

 * Level L  - 7% of codewords can be restored
 * Level M  - 15% of codewords can be restored
 * Level Q  - 25% of codewords can be restored
 * Level H  - 30% of codewords can be restored


	var codes = require("rescode");

	function( res, req ) 
	{
      codes.loadModules("qrcode", { "eclevel":"M"} );  
      
      var data = codes.create("qrcode","http://npmjs.org");
        
      res.setHeader("Content-Type","image/png");
      res.end( data );
      
      OR
      
      res.end("<html><img src='data:image/png;base64,"+data.toString("base64")+"' /></html>");
	}


Configure
---------
	Choose in lib/codes.js the Adatper PNG ( binary png ) or Canvas ( dataURL (smaller size), but canvas has to be installed )

	