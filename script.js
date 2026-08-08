document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // BOTÕES DE INTERESSE
    // =========================

    const botoes = document.querySelectorAll(".btn-interesse");

    botoes.forEach(function (botao) {

        botao.addEventListener("click", function () {

            alert(
                "Obrigado pelo interesse! Entre em contato com a ONG."
            );

        });

    });


    // =========================
    // FOTOS DOS ANIMAIS
    // =========================

    const fotos = document.querySelectorAll(".foto-animal");

    const visualizador =
        document.getElementById("visualizador");

    const fotoAmpliada =
        document.getElementById("foto-ampliada");

    const fechar =
        document.getElementById("fechar");


    // =========================
    // ABRIR FOTO
    // =========================

    fotos.forEach(function (foto) {

        foto.addEventListener("click", function () {

            if (!visualizador || !fotoAmpliada) {
                return;
            }

            fotoAmpliada.src = foto.src;

            fotoAmpliada.alt =
                foto.alt || "Foto ampliada";

            visualizador.style.display = "flex";

        });

    });


    // =========================
    // FECHAR NO X
    // =========================

    if (fechar) {

        fechar.addEventListener("click", function () {

            visualizador.style.display = "none";

        });

    }


    // =========================
    // FECHAR CLICANDO FORA
    // =========================

    if (visualizador) {

        visualizador.addEventListener("click", function (event) {

            if (event.target === visualizador) {

                visualizador.style.display = "none";

            }

        });

    }


    // =========================
    // FECHAR COM ESC
    // =========================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && visualizador) {

            visualizador.style.display = "none";

        }

    });

});
