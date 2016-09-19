"use strict";

var IconDownloader = require('./icondownloader.js');
var myArgs = process.argv.slice(2);
if (myArgs.length > 0) {
	var instance = new IconDownloader(myArgs[0]);
	instance.getPNGImages();
} else {
	console.log('Please enter a directory path as an argument.');
}