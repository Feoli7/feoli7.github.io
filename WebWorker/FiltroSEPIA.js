var SEPIA =	function(internoImg, l) {
        for(var i=0; i<l; i+= 4){
          var red = internoImg[i];
          var green = internoImg[i+1];
          var blue = internoImg[i+2];
          internoImg[i] = internoImg[i+1] = internoImg[i+2] = 0.3*red + 0.59*green + 0.11*blue;
          internoImg[i] += 40;
          internoImg[i+1] += 20;
          internoImg[i+2] -= 20;
        }
};
