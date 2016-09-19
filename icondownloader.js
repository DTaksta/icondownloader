"use strict";

var request = require('request');
var url = require('url');
var cheerio = require('cheerio');
var path = require('path');
var fs = require('fs'); 

class IconDownloader {
	constructor(directory) {		
		this.uri = 'https://www.iconfinder.com/iconsets/social-media-2070';
		this.directory = directory;
	}  
  
	getPNGImages() {
		return this.getImages('png', this.directory);
	}
	
	getImages(type, directory) {	
		if (!(type&&directory)) throw new Error('missing the parameters required for getImages function.');
		var url = require('url');
		var cheerio = require('cheerio');
		console.log('busy processing your request.................................................................');
		request(this.uri, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var $ = cheerio.load(body);
				var imgs = $('img.tiled-icon').toArray();
				var downloaded_message = 'No ' + type + ' icons to download from the web page.';
				imgs.forEach(function (img) {	
					process.stdout.write(".");
					var img_url = img.attribs.src;
					var splitted_img_url = img_url.split('.');
					var extension = splitted_img_url.pop();
					//Check if file type is right. Compare extension, and ignore thing after as it could be .png?id=1
					if (extension.indexOf(type) !== -1) {
						downloaded_message = 'Successfully downloaded all ' + type + ' icons from the web page.';
						var img_name = path.basename(img_url);
						request(img_url).pipe(fs.createWriteStream(directory + '/' + img_name));
					}
				})
				console.log(downloaded_message);
			} else {
				console.log('Failed to get successful response from the web page.');
			}
		})
		return true;
	}
}
module.exports = IconDownloader;