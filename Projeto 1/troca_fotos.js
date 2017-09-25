document.addEventListener("DOMContentLoaded", function() {

  var i = 2;

  var troca = function() {
    var foto = document.querySelector(".foto");

    foto.src = "imagem_inicial" + i + ".jpg";

    i++;

    if(i === 3) {
        i = 1;
    }
  }

  setInterval(troca, 6000); // mili segundos

});


