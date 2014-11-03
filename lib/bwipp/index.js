var BWIPJS = require("../bwip.js");
/**
 * OPTIONS
 *  "includetext":true,
 *  "guardwhitespace":false,
 * 	"textyoffset":5,
 * 	"textyoffset":5,
 * 	"textxalign":"left",
 * 	"textyalign":"top",
 * 	"alttext":"",
 * 	"inkspread":0,
 *  rot: 'N' // 'L', 'R', 'I' 
 *  scaleX: 1
 *  scaleY: 1
 */
   
require("./renlinear");
require("./renmatrix");
require("./renmaximatrix");


exports.addExport = function(export_name, settings) {
	require("./"+export_name);
	exports[export_name] = settings;
}


var needyoffset = {
		auspost:true,
		bc412:true,
		code11:true,
		code2of5:true,
		code39:true,
		code39ext:true,
		code93:true,
		code93ext:true,
		flattermarken:true,
		itf14:true,
		interleaved2of5:true,
		japanpost:true,
		msi:true,
		plessey:true,
		rationalizedCodabar:true,
		royalmail:true,
		kix:true,
		telepen:true,
		planet:true,
		postnet:true,
	};

var symdesc = 
[
	{ sym:"ean5",desc:"EAN-5 (5 digit addon)",text:"90200",opts:"includetext guardwhitespace" },
	{ sym:"ean2",desc:"EAN-2 (2 digit addon)",text:"05",opts:"includetext guardwhitespace" },
	{ sym:"ean13",desc:"EAN-13",text:"2071473968010",opts:"includetext guardwhitespace" },
	{ sym:"ean8",desc:"EAN-8",text:"01335583",opts:"includetext guardwhitespace height=0.5" },
	{ sym:"upca",desc:"UPC-A",text:"488581014973",opts:"includetext" },
	{ sym:"upce",desc:"UPC-E",text:"00123457",opts:"includetext height=0.4" },
	{ sym:"isbn",desc:"ISBN",text:"978-1-56592-479 54495",opts:"includetext guardwhitespace" },
	{ sym:"ismn",desc:"ISMN",text:"979-0-2600-0043",opts:"includetext guardwhitespace" },
	{ sym:"issn",desc:"ISSN",text:"0317-8471 00 05",opts:"includetext guardwhitespace" },
	{ sym:"code128",desc:"Code 128",text:"Count01234567^FNC2!",opts:"includetext parsefnc" },
	{ sym:"gs1-128",desc:"GS1-128",text:"(01)95012345678903(3103)000123",opts:"includetext" },
	{ sym:"ean14",desc:"GS1-14",text:"(01)04601234567893",opts:"includetext" },
	{ sym:"sscc18",desc:"SSCC-18",text:"(00)006141411234567890",opts:"includetext" },
	{ sym:"code39",desc:"Code 39",text:"THIS IS CODE 39",opts:"includetext includecheck includecheckintext" },
	{ sym:"code39ext",desc:"Code 39 Extended",text:"Code39 Ext!",opts:"includetext includecheck includecheckintext" },
	{ sym:"code32",desc:"Italian PharmaCode",text:"01234567",opts:"includetext" },
	{ sym:"pzn",desc:"Pharmazentralnummer (PZN)",text:"123456",opts:"includetext" },
	{ sym:"code93",desc:"Code 93",text:"THIS IS CODE 93",opts:"includetext includecheck" },
	{ sym:"code93ext",desc:"Code 93 Extended",text:"Code93 Ext!",opts:"includetext includecheck" },
	{ sym:"interleaved2of5",desc:"Interleaved 2 of 5 (ITF)",text:"2401234567",opts:"height=0.5 includecheck includetext includecheckintext" },
	{ sym:"itf14",desc:"ITF-14",text:"04601234567893",opts:"includetext" },
	{ sym:"identcode" ,desc:"Deutsche Post Identcode",text:"563102430313",opts:"includetext" },
	{ sym:"leitcode" ,desc:"Deutsche Post Leitcode",text:"21348075016401",opts:"includetext" },
	{ sym:"databaromni",desc:"GS1 DataBar Omnidirectional",text:"(01)24012345678905",opts:"" },
	{ sym:"databarstacked",desc:"GS1 DataBar Stacked",text:"(01)24012345678905",opts:"" },
	{ sym:"databarstackedomni",desc:"GS1 DataBar Stacked Omnidirectional",text:"(01)24012345678905",opts:"" },
	{ sym:"databartruncated",desc:"GS1 DataBar Truncated",text:"(01)24012345678905",opts:"" },
	{ sym:"databarlimited",desc:"GS1 DataBar Limited",text:"(01)15012345678907",opts:"" },
	{ sym:"databarexpanded",desc:"GS1 DataBar Expanded",text:"(01)95012345678903(3103)000123",opts:"" },
	{ sym:"databarexpandedstacked",desc:"GS1 DataBar Expanded Stacked",text:"(01)95012345678903(3103)000123",opts:"segments=4" },
	{ sym:"pharmacode",desc:"Pharmaceutical Binary Code",text:"117480",opts:"showborder" },
	{ sym:"pharmacode2",desc:"Two-track Pharmacode",text:"117480",opts:"includetext showborder" },
	{ sym:"code2of5",desc:"Code 25",text:"01234567",opts:"version=iata includetext includecheck includecheckintext" },
	{ sym:"code11",desc:"Code 11",text:"0123456789",opts:"includetext includecheck includecheckintext" },
	{ sym:"bc412",desc:"BC412",text:"BC412",opts:"semi includetext includecheckintext" },
	{ sym:"rationalizedCodabar",desc:"Rationalized Codabar",text:"A0123456789B",opts:"includetext includecheck includecheckintext" },
	{ sym:"onecode",desc:"United States Postal Service Intelligent Mail",text:"0123456709498765432101234567891",opts:"barcolor=FF0000" },
	{ sym:"postnet",desc:"United States Postal Service POSTNET",text:"01234",opts:"includetext includecheckintext" },
	{ sym:"planet",desc:"United States Postal Service PLANET",text:"01234567890",opts:"includetext includecheckintext" },
	{ sym:"royalmail",desc:"Royal Mail 4 State Customer Code (RM4SCC)",text:"LE28HS9Z",opts:"includetext includecheckintext barcolor=FF0000" },
	{ sym:"auspost",desc:"AusPost 4 State Customer Code",text:"5956439111ABA 9",opts:"includetext custinfoenc=character" },
	{ sym:"kix",desc:"Royal Dutch TPG Post KIX 4-State Barcode",text:"1231FZ13XHS",opts:"includetext includecheckintext" },
	{ sym:"japanpost",desc:"Japan Post 4 State Customer Code",text:"6540123789-A-K-Z",opts:"includetext includecheckintext" },
	{ sym:"msi",desc:"MSI Modified Plessey",text:"0123456789",opts:"includetext includecheck includecheckintext" },
	{ sym:"plessey",desc:"Plessey UK",text:"01234ABCD",opts:"includetext includecheckintext" },
	{ sym:"telepen",desc:"Telepen",text:"123456",opts:"numeric includetext" },
	{ sym:"posicode",desc:"PosiCode",text:"ABC123",opts:"version=b inkspread=-0.5 parsefnc includetext" },
	{ sym:"codablockf",desc:"Codablock F",text:"CODABLOCK F 34567890123456789010040digit",opts:"columns=8" },
	{ sym:"code16k",desc:"Code 16K",text:"Abcd-1234567890-wxyZ",opts:"" },
	{ sym:"code49",desc:"Code 49",text:"MULTIPLE ROWS IN CODE 49",opts:"" },
	{ sym:"channelcode",desc:"Channel Code",text:"3493",opts:"height=0.5 includetext " },
	{ sym:"flattermarken",desc:"Flattermarken",text:"12345",opts:"inkspread=-0.25" },
	{ sym:"raw",desc:"Raw bar space succession for custom symbologies ",text:"331132131313411122131311333213114131131221323",opts:"height=0.5" },
	{ sym:"daft",desc:"Raw DAFT succession for custom 4 state symbologies",text:"FATDAFTDAD",opts:"" },
	{ sym:"symbol",desc:"Miscellaneous symbols",text:"fima",opts:"backgroundcolor=DD000011" },
	{ sym:"pdf417",desc:"PDF417",text:"This is PDF417",opts:"" },
	{ sym:"micropdf417",desc:"MicroPDF417",text:"MicroPDF417",opts:"" },
	{ sym:"datamatrix",desc:"Data Matrix",text:"This is Data Matrix!",opts:"rows=32 columns=32" },
	{ sym:"qrcode",desc:"QR Code",text:"http://www.terryburton.co.uk/barcodewriter/",opts:"eclevel=M" },
	{ sym:"maxicode",desc:"MaxiCode",text:"[)>^03001^02996152382802^029840^029001^0291Z00004951^029UPSN^02906X610^029159^0291234567^0291/1^029^029Y^029634 ALPHA DR^029PITTSBURGH^029PA^029^004",opts:"mode=2 parse" },
	{ sym:"azteccode",desc:"Aztec Code",text:"This is Aztec Code",opts:"format=full" },
	{ sym:"codeone",desc:"Code One",text:"Code One",opts:"version=B" },
	{ sym:"gs1-cc",desc:"GS1 Composite 2D Component",text:"(01)95012345678903(3103)000123",opts:"ccversion=b cccolumns=4" },
	{ sym:"ean13composite",desc:"EAN-13 Composite",text:"2112345678900|(99)1234-abcd",opts:"includetext" },
	{ sym:"ean8composite",desc:"EAN-8 Composite",text:"02345673|(21)A12345678",opts:"includetext" },
	{ sym:"upcacomposite",desc:"UPC-A Composite",text:"416000336108|(99)1234-abcd",opts:"includetext" },
	{ sym:"upcecomposite",desc:"UPC-E Composite",text:"00123457|(15)021231",opts:"includetext" },
	{ sym:"databaromnicomposite",desc:"GS1 DataBar Omnidirectional Composite",text:"(01)03612345678904|(11)990102",opts:"" },
	{ sym:"databarstackedcomposite",desc:"GS1 DataBar Stacked Composite",text:"(01)03412345678900|(17)010200",opts:"" },
	{ sym:"databarstackedomnicomposite",desc:"GS1 DataBar Stacked Omnidirectional Composite",text:"(01)03612345678904|(11)990102",opts:"" },
	{ sym:"databartruncatedcomposite",desc:"GS1 DataBar Truncated Composite",text:"(01)03612345678904|(11)990102",opts:"" },
	{ sym:"databarlimitedcomposite",desc:"GS1 DataBar Limited Composite",text:"(01)03512345678907|(21)abcdefghijklmnopqrstuv",opts:"" },
	{ sym:"databarexpandedcomposite",desc:"GS1 DataBar Expanded Composite",text:"(01)93712345678904(3103)001234|(91)1A2B3C4D5E",opts:"" },
	{ sym:"databarexpandedstackedcomposite",desc:"GS1 DataBar Expanded Stacked Composite",text:"(01)00012345678905(10)ABCDEF|(21)12345678",opts:"segments=4 " },
	{ sym:"gs1-128composite",desc:"GS1-128 Composite",text:"(00)030123456789012340|(02)13012345678909(37)24(10)1234567ABCDEFG",opts:"ccversion=c" },
	{ sym:"gs1datamatrix",desc:"GS1 Data Matrix",text:"(01)03453120000011(17)120508(10)ABCD1234(410)9501101020917",opts:"" },
	{ sym:"hibccode39",desc:"HIBC Code 39",text:"A123BJC5D6E71",opts:"includetext" },
	{ sym:"hibccode128",desc:"HIBC Code 128",text:"A123BJC5D6E71",opts:"includetext" },
	{ sym:"hibcdatamatrix",desc:"HIBC Data Matrix",text:"A123BJC5D6E71",opts:"" },
	{ sym:"hibcpdf417",desc:"HIBC PDF417",text:"A123BJC5D6E71",opts:"" },
	{ sym:"hibcmicropdf417",desc:"HIBC MicroPDF417",text:"A123BJC5D6E71",opts:"" },
	{ sym:"hibcqrcode",desc:"HIBC QR Code",text:"A123BJC5D6E71",opts:"" },
	{ sym:"hibccodablockf",desc:"HIBC Codablock F",text:"A123BJC5D6E71",opts:"" },
	null
 ];

