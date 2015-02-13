Codes
=========
Notice that I am not the author of the code, I am just the creator of an npm module out of the great library from https://code.google.com/p/bwip-js/.

Install
---------
	npm install rescode
    
    
Barcode or Code types available
----------
ean2, ean5, ean8, upca, upce, isbn, ismn, issm, code128, gs1-128, ean13, sscc18, code39, code39ext, code32, pzn, code93, code93ext, interleaved2of5, itf14, identcode, leitcode, databaromni, databarstacked, databarstackedomni, databartruncated, databarlimited, databarexpanded, databarexpandedstacked, pharmacode, pharmacode2, code2of5, code11, bc412, rationalizedCodabar, onecode, postnet, planet, royalmail, auspost, kix, japanpost, msi, plessey, telepen, posicode, codablockf, code16k, code49, channelcode, flattermarken, raw, daft, symbol, pdf417, micropdf417, datamatrix, qrcode, maxicode, azteccode, codeone, gs1-cc, ean13composite, ean8composite, upcacomposite, upcecomposite, databaromnicomposite, databarstackedcomposite, databarstackedomnicomposite, databartruncatedcomposite, databarlimitedcomposite, databarexpandedcomposite, databarexpandedstackedcomposite, gs1-128composite, gs1datamatrix, hibccode39, hibccode128, hibcdatamatrix, hibcpdf417, hibcmicropdf417, hibcqrcode, hibccodablockf
	
Example loading specific barcode types
---------------------------------------
	var codes = require("rescode");

	function( res, req ) 
	{
        // Sequence is important
		codes.loadModules(["ean2", "ean5", "ean8", "ean13"]);
		
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
		codes.loadModules(["ean2", "ean5"]);		
        codes.loadModules(["ean8"], { "includetext":false, "guardwhitespace":false, "inkspread":0, scaleX:3, textyoffset:-15 });
		codes.loadModules(["ean13"]);
        
		var data8 = codes.create("ean8","12345678");
        
        res.setHeader("Content-Type","image/png");
		res.end( data8 );
        
        OR
        
        res.end("<html><img src='data:image/png;base64,"+data8.toString("base64")+"' /></html>");
	}	
		
Example loading qrcode
----------------------------------------------------------------------------

	var codes = require("rescode");

	function( res, req ) 
	{
      // Level L  - 7% of codewords can be restored
      // Level M  - 15% of codewords can be restored
      // Level Q  - 25% of codewords can be restored
      // Level H  - 30% of codewords can be restored
      // IMPORTANT white padding around qrcode 
      
      // CREATE
      codes.loadModules(["qrcode"], { "eclevel":"M" , "version": "4", "scaleX": 2, "scaleY": 2} );  
      
      var data = codes.create("qrcode","http://npmjs.org");
        
      OR
      
      codes.loadModules(["qrcode"]);  
      
      var data = codes.create("qrcode","http://npmjs.org", { "eclevel":"M" , "version": "4", "scaleX": 2, "scaleY": 2} );
        
      // SHOW
      res.setHeader("Content-Type","image/png");
      res.end( data );
      
      OR
      
      res.end("<html><img src='data:image/png;base64,"+data.toString("base64")+"' /></html>");
	}


Configure
---------
Choose in lib/codes.js the Adatper PNG ( binary png ) or Canvas ( dataURL (smaller size), but canvas has to be installed )

	
Thanks
---------
To Jens Olsson for dynamic loading of the libraries
  