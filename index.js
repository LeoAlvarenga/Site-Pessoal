var alturaTela = screen.height;

var cabecalho = document.getElementById("cabecalho");

console.log(cabecalho)
console.log(alturaTela)

cabecalho.style.height = String.toString(alturaTela);
console.log(cabecalho.style.height);

function direcionaGit(url) {
    window.open(url, '_blank');
};

