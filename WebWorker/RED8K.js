﻿"use strict";

(function () {

    var img = document.getElementById("img");

    img.onload = function () {
        var inicio = new Date();

        var canvas = document.getElementById("img_result");
        canvas.width = img.clientWidth;
        canvas.height = img.clientHeight;

        var tempContext = canvas.getContext("2d");
        var len = canvas.width * canvas.height * 4;

        tempContext.drawImage(img, 0, 0, canvas.width, canvas.height);

        var workersQtd = 3;
        var finalizados = 0;
        var tamanhoSegmento = len / workersQtd;
        var tamanhoBloco = canvas.height / workersQtd;

        var onWorkEnded = function (e) {
            var canvasData = e.data.result;
            var cdx = e.data.cdx;

            tempContext.putImageData(canvasData, 0, tamanhoBloco * cdx);

            finalizados++;

            if (finalizados == workersQtd) {
                var contagemTempo = new Date() - inicio;
                alert("PROCESSAMENTO CONCLUÍDO EM " + contagemTempo + " MS!!!");
            }
        };

        for (var cdx = 0; cdx < workersQtd; cdx++) {
            var worker = new Worker("ProcessarRED.js");
            worker.onmessage = onWorkEnded;

            var canvasData = tempContext.getImageData(0, tamanhoBloco * cdx, canvas.width, tamanhoBloco);
            worker.postMessage({ data: canvasData, cdx: cdx, length: tamanhoSegmento });
        }
    };

    img.src = "http://feoli7.github.io/imagens/img_8k.jpg";
})();



