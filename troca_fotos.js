document.addEventListener("DOMContentLoaded", function() {

  var i = 2;

  var troca = function() {
    var foto = document.querySelector(".foto");

    foto.src = "imagens_pi/imagem" + i + ".jpg";


    i+=1;

    if(i === 14){
      i = 1;
    }
  
    }

  

  setInterval(troca, 5000); // mili segundos

});
