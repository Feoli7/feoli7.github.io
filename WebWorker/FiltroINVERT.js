var INVERT =	function(internoImg, l) {

    for(var i = 0; i < l; i += 4) {
          internoImg[i] = 255 - internoImg[i];
          internoImg[i + 1] = 255 - internoImg[i + 1];
          internoImg[i + 2] = 255 - internoImg[i + 2];
        }
};
