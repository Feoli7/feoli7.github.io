importScripts('http://feoli7.github.io/sobel.js');
 
self.onmessage = function(event) {
  // Sobel constructor returns an Uint8ClampedArray with sobel data 
  var sobelData = Sobel(imageData);
 
  self.postMessage(sobelData);
};