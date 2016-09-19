var chai = require('chai');
var IconDownloader = require('../icondownloader.js');
var expect = chai.expect;

describe("IconDownloader", function() {
	describe("constructor", function() {
		it("should set directory name if provided", function() {
			var icon_downloader = new IconDownloader("images");
			expect(icon_downloader.directory).to.equal("images");
		});
	});
});

describe("#getImages", function() {
	it("should have the required paramters for getImages function", function() {
		expect(function() {			
			(new IconDownloader()).getImages();
		}).to.throw(Error);
	});
});