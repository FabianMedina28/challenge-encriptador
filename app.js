document.addEventListener("DOMContentLoaded", function() {
    const btnCopiar = document.getElementById("btn-copiar");
    btnCopiar.style.display = "none"; // Ocultar el botón al inicio

    function encriptar() {
        let texto = document.getElementById("text-area").value; 
        let textoDom = document.getElementById("textoDom");
        let fotoDom = document.getElementById("fotoDom");

        if (texto.length != 0) {
            let textoCifrado = texto
                .replaceAll("e", "enter")
                .replaceAll("i", "imes")
                .replaceAll("a", "ai")
                .replaceAll("o", "ober")
                .replaceAll("u", "ufat");

            textoDom.innerHTML = textoCifrado;
            fotoDom.style.display = "none";
            btnCopiar.style.display = "block"; // Mostrar el botón "Copiar"
        } else {
            textoDom.innerHTML = "Ningún mensaje fue encontrado";
            fotoDom.style.display = "block";
            btnCopiar.style.display = "none"; // Ocultar el botón "Copiar" si no hay mensaje
        }

        console.log(texto);
    }

    function desencriptar() {
        let texto = document.getElementById("text-area").value; 
        let textoDom = document.getElementById("textoDom");
        let fotoDom = document.getElementById("fotoDom");

        if (texto.length != 0) {
            let textoDescifrado = texto
                .replaceAll("ufat", "u")
                .replaceAll("ober", "o")
                .replaceAll("imes", "i")
                .replaceAll("enter", "e")
                .replaceAll("ai", "a");

            textoDom.innerHTML = textoDescifrado;
            fotoDom.style.display = "none";
            btnCopiar.style.display = "block"; // Mostrar el botón "Copiar"
        } else {
            textoDom.innerHTML = "Ningún mensaje fue encontrado";
            fotoDom.style.display = "block";
            btnCopiar.style.display = "none"; // Ocultar el botón "Copiar" si no hay mensaje
        }

        console.log(texto);
    }

    function copiarTexto() {
        let textoParaCopiar = document.getElementById("textoDom").innerText;

        if (textoParaCopiar.length != 0) {
            navigator.clipboard.writeText(textoParaCopiar).then(() => {
                let textoOriginal = btnCopiar.innerText;
                btnCopiar.innerText = "Copiado!";
                setTimeout(() => {
                    btnCopiar.innerText = textoOriginal;
                }, 2000); // Cambia el texto por 2 segundos
            }).catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
        }
    }

    // Asigna los eventos a los botones
    document.querySelector(".btn-encriptar").addEventListener("click", encriptar);
    document.querySelector(".btn-desencriptar").addEventListener("click", desencriptar);
    btnCopiar.addEventListener("click", copiarTexto);
});
