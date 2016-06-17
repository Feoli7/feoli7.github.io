var BLUE =	function(internoImg, l) {
    for(var i=0; i < l; i+=4){
      var red   = internoImg[i];
      var green = internoImg[i+1];
      var blue  = internoImg[i+2];
      var alpha = internoImg[i+3];
      var bw = (red + green + blue)/3;
      internoImg[i] = 1*red;
      internoImg[i+1] = 0*green;
      internoImg[i+2] = 0*blue;
      internoImg[i+3] = 1*alpha; 
    }
};
