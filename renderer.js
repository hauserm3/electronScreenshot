// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

function screenshot (callback) {
    var remote = require('electron').remote;

    remote.getCurrentWindow().capturePage(function handleCapture (img) {
        callback(img);
    });
}

var filename = 'test.png';

setTimeout(function () {
    screenshot(function (img) {
        console.log(img);
        require('fs').writeFile(filename, img.toPng());
    });
    console.log('render hello');
}, 2000);