NodeJS, ECMA6 program that downloads all png images from a static
url - 'https://www.iconfinder.com/iconsets/social-media-2070'.

*********************Pre-requisites****************
Install NodeJS and the dependencies as listed in package.json
Then run npm install icondownloader

**********************Operations*******************
1)Running
1.1 - From project directory.
npm start directory_to_save_into

1.2 - Including in another project.
var IconDownloader = require('./icondownloader.js');
var instance = new IconDownloader('directory_name');

2)Testing
Some unit test written using chai and runnable 
with mocha. Install them locally to the project and then execute:
npm test