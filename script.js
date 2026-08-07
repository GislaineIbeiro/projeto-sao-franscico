document.addEventListener("DOMContentLoaded", function() {

    // BOTÕES DE INTERESSE
    let botoes = document.querySelectorAll(".btn-interesse");

    botoes.forEach(function(botao) {

        botao.onclick = function() {

            alert("Obrigado pelo interesse! Entre em contato com a ONG.");

        };

    });


    // FOTOS DOS ANIMAIS
    let fotos = document.querySelectorAll(".foto-animal");

    let visualizador = document.getElementById("visualizador");

    let fotoAmpliada = document.getElementById("foto-ampliada");

    let fechar = document.getElementById("fechar");


    // CLICAR NA FOTO
    fotos.forEach(function(foto) {

        foto.onclick = function() {

            fotoAmpliada.src = foto.src;

            visualizador.style.display = "flex";

        };

    });


    // FECHAR NO X
    fechar.onclick = function() {

        visualizador.style.display = "none";

    };


    // FECHAR CLICANDO FORA DA FOTO
    visualizador.onclick = function(event) {

        if (event.target === visualizador) {

            visualizador.style.display = "none";

        }

    };

});