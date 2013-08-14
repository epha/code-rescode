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

Configure
---------
	Choose in lib/codes.js the Adatper PNG ( binary png ) or Canvas ( dataURL (smaller size), but canvas has to be installed )
	Choose in lib/bwipp/index.js the Code Generators and Defaults
	