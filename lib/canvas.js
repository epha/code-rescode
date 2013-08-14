// file: lib/canvas.js
//
// Copyright (c) 2011-2013 Mark Warren
//
// See the COPYRIGHT file in the bwip.js root directory
// for the extended copyright notice.

// With embedding in the browser, we load the symbols externally


// Encapsulate the bitmap interface

// bwip-js bitmap interface

var canvas = require("canvas");

var Bitmap = function() 
{
	var clr  = [0, 0, 0];
	var pts  = [];
	var minx = Infinity;	// min-x
	var miny = Infinity;	// min-y
	var maxx = 0;			// max-x
	var maxy = 0;			// max-y

	this.color = function(r, g, b) {
		clr = [r, g, b];
	};

	this.set = function(x,y) {
		x = Math.floor(x);
		y = Math.floor(y);
		pts.push([ x,y,clr ]);
		if (minx > x) minx = x;
		if (miny > y) miny = y;
		if (maxx < x) maxx = x;
		if (maxy < y) maxy = y;
	};

	this.create = function(rot) {
	
	    var cvs = new Canvas();
	    
		if (pts.length == 0) {
			cvs.width  = 32;
			cvs.height = 32;
			cvs.getContext('2d').clearRect(0, 0, cvs.width, cvs.height);
			return;
		}
	
		if (rot == 'R' || rot == 'L') {
			var h = maxx-minx+1;
			var w = maxy-miny+1;
		} else {
			var w = maxx-minx+1;
			var h = maxy-miny+1;
		}
	
		cvs.width  = w;
		cvs.height = h;
	
		var ctx = cvs.getContext('2d');
		ctx.fillStyle = '#fff';
		ctx.fillRect(0, 0, cvs.width, cvs.height);
		ctx.fillStyle = '#000';
	
		var id  = ctx.getImageData(0, 0, cvs.width, cvs.height);
		var dat = id.data;
	
		for (var i = 0; i < pts.length; i++) {
			// PostScript builds bottom-up, we build top-down.
			var x = pts[i][0] - minx;
			var y = pts[i][1] - miny;
			var c = pts[i][2];
	
			if (rot == 'N') {
				y = h - y - 1; 	// Invert y
			} else if (rot == 'I') {
				x = w - x - 1;	// Invert x
			} else {
				y = w - y; 	// Invert y
				if (rot == 'L') {
					var t = y;
					y = h - x - 1;
					x = t - 1;
				} else {
					var t = x;
					x = w - y;
					y = t;
				}
			}
	
			var idx = (y * id.width + x) * 4
			dat[idx++] = c[0];	// r
			dat[idx++] = c[1];	// g
			dat[idx++] = c[2];	// b
			dat[idx]   = 255;
		}
		ctx.putImageData(id, 0, 0);
	    
	  return new Buffer( cvs.toDataURL(), "base64" );
	};
};

module.exports = Bitmap;
