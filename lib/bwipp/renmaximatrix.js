// file: bwipp/renmaximatrix.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2013-01-25
//
// Copyright (c) 2011-2013 Mark Warren
// Copyright (c) 2004-2013 Terry Burton
//
// See the LICENSE file in the bwip.js root directory
// for the extended copyright notice.
// BEGIN renmaximatrix
BWIPJS.bwipp["renmaximatrix"]=function() {
	function $f0(){
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f1(){
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f2(){
		var t=this.dstk.get("x");
		if (t===undefined) throw new Error("dict: x: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f3(){
		var t=this.dstk.get("x");
		if (t===undefined) throw new Error("dict: x: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0.5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f4(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]="x"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=30;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="y"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=30;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("y");
		if (t===undefined) throw new Error("dict: y: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f2;
		this.stk[this.ptr++]=$f3;
		var t6=this.stk[--this.ptr];
		var t7=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t7.call(this)==-1) return -1;
		} else {
			if (t6.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=32;
		var t=this.dstk.get("y");
		if (t===undefined) throw new Error("dict: y: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0.8661;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var y=this.stk[--this.ptr];
		this.moveto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0.5774;
		var y=this.stk[--this.ptr];
		this.rmoveto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=-0.5;
		this.stk[this.ptr++]=-0.2887;
		var y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=-0.5774;
		var y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=0.5;
		this.stk[this.ptr++]=-0.2887;
		var y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=0.5;
		this.stk[this.ptr++]=0.2887;
		var y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0.5774;
		var y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.stk[this.ptr++]=-0.5;
		this.stk[this.ptr++]=0.2887;
		var y=this.stk[--this.ptr];
		this.rlineto(this.stk[--this.ptr],y);
		this.closepath();
		this.fill();
	}
	this.stk[this.ptr++]=20;
	this.stk[this.ptr-1]={};
	this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
	this.stk[this.ptr++]="args"; //ident
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("args");
	if (t===undefined) throw new Error("dict: args: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f0;
	var t2=this.stk[--this.ptr];
	var t1=this.stk[--this.ptr];
	for (t0 in t1) {
		if (t1 instanceof BWIPJS.psstring || t1 instanceof BWIPJS.psarray) {
			if (t0.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t1.get(t0);
		} else {
			this.stk[this.ptr++]=t0;
			this.stk[this.ptr++]=t1[t0];
		}
		if (t2.call(this)==-1) break;
	}
	var t=this.dstk.get("opt");
	if (t===undefined) throw new Error("dict: opt: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f1;
	var t5=this.stk[--this.ptr];
	var t4=this.stk[--this.ptr];
	for (t3 in t4) {
		if (t4 instanceof BWIPJS.psstring || t4 instanceof BWIPJS.psarray) {
			if (t3.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t4.get(t3);
		} else {
			this.stk[this.ptr++]=t3;
			this.stk[this.ptr++]=t4[t3];
		}
		if (t5.call(this)==-1) break;
	}
	this.gsave();
	var t=this.currentpoint();
	this.stk[this.ptr++]=t.x;
	this.stk[this.ptr++]=t.y;
	var y=this.stk[--this.ptr];
	this.translate(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=2.4945;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	var y=this.stk[--this.ptr];
	this.scale(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=0.5;
	this.stk[this.ptr++]=0.5774;
	var y=this.stk[--this.ptr];
	this.translate(this.stk[--this.ptr],y);
	var t=this.dstk.get("pixs");
	if (t===undefined) throw new Error("dict: pixs: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f4;
	var t10=this.stk[--this.ptr];
	var t9=this.stk[--this.ptr];
	for (t8 in t9) {
		if (t9 instanceof BWIPJS.psstring || t9 instanceof BWIPJS.psarray) {
			if (t8.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t9.get(t8);
		} else {
			this.stk[this.ptr++]=t8;
			this.stk[this.ptr++]=t9[t8];
		}
		if (t10.call(this)==-1) break;
	}
	this.newpath();
	this.stk[this.ptr++]=14;
	this.stk[this.ptr++]=13.8576;
	this.stk[this.ptr++]=0.5774;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=360;
	this.arc(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1],true); this.ptr-=5;
	this.closepath();
	this.stk[this.ptr++]=14;
	this.stk[this.ptr++]=13.8576;
	this.stk[this.ptr++]=1.3359;
	this.stk[this.ptr++]=360;
	this.stk[this.ptr++]=0;
	this.arc(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1],false); this.ptr-=5;
	this.closepath();
	this.fill();
	this.newpath();
	this.stk[this.ptr++]=14;
	this.stk[this.ptr++]=13.8576;
	this.stk[this.ptr++]=2.1058;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=360;
	this.arc(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1],true); this.ptr-=5;
	this.closepath();
	this.stk[this.ptr++]=14;
	this.stk[this.ptr++]=13.8576;
	this.stk[this.ptr++]=2.8644;
	this.stk[this.ptr++]=360;
	this.stk[this.ptr++]=0;
	this.arc(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1],false); this.ptr-=5;
	this.closepath();
	this.fill();
	this.newpath();
	this.stk[this.ptr++]=14;
	this.stk[this.ptr++]=13.8576;
	this.stk[this.ptr++]=3.6229;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=360;
	this.arc(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1],true); this.ptr-=5;
	this.closepath();
	this.stk[this.ptr++]=14;
	this.stk[this.ptr++]=13.8576;
	this.stk[this.ptr++]=4.3814;
	this.stk[this.ptr++]=360;
	this.stk[this.ptr++]=0;
	this.arc(this.stk[this.ptr-5],this.stk[this.ptr-4],this.stk[this.ptr-3],this.stk[this.ptr-2],this.stk[this.ptr-1],false); this.ptr-=5;
	this.closepath();
	this.fill();
	this.grestore();
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
// END OF renmaximatrix
