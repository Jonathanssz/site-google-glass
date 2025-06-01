var padrao = "_imagens/glass-oculos-preto-peq.png";
function mudaFoto(foto) {
    if (foto == "padrao") {
        document.getElementById("icone").src = padrao;
    } else {
        document.getElementById("icone").src = "_imagens/" + foto + ".png";
    }
}
