GLOBAL.BWIPJS = require("./bwip.js");

// CONFIGURE IN index.js
var types  = require("./bwipp");

// ADAPTER png || canvas
var adapter = require("./png");

// FONTS
var fonts  = require("./fonts");

exports.loadModules = function(modules)
{
        modules.forEach(function(m) {
                types[m] = require("./bwipp/"+m);
        });
        types = require("./bwipp");
}


exports.create = function( type, text, options )
{
	// CODER AVAILABLE
    var opts = ( types[ type ] ) ? options || types[ type ] : null;
    
    // BAD REQUEST
    if( !type || !text || !opts ) return null;

	// DEFAULTS
	var rot = opts.rot || "N"; 
	var scaleX = opts.scaleX || 1;
	var scaleY = opts.scaleY || 1;

	// GENERATE
	var bw = new BWIPJS();
	bw.bitmap(new adapter);
	bw.push(text);
	bw.push(opts);
    bw.scale(scaleX, scaleY);
	bw.call(type);
	return bw.bitmap().create(rot);
};

