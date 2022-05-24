
   
const txt1 = document.getElementById('campTxt1');
const exibeTexto = document.getElementById('mostraTexto');
const botaoCodifica = document.getElementById('btn1');
const botaoDescodifica = document.getElementById('btn2');


//funçao que usando o replace altera as respectivas letras para outras palavras
function codificaTexto() {

    if (txt1.value.length == 0) {
        alert('digite algum texto');
    } else {

        exibeTexto.value = txt1.value.
            replace(/e/g, 'enter').
            replace(/í/g, 'imea').
            replace(/a/g, 'ai').
            replace(/o/g, 'ober').
            replace(/ú/g, 'ufat').
            replace(/[^a-zA-Zs]/g, "")

        txt1.value = "";// a mensagem some qnd clicar no botão
    }
}

botaoCodifica.addEventListener('click', codificaTexto);

//------------- funcao ativada no primeiro botão -------


function decodificaTexto() {
    exibeTexto.value = exibeTexto.value.
        replace(/enter/g, 'e').
        replace(/imea/g, 'i').
        replace(/ai/g, 'a').
        replace(/ober/g, 'o').
        replace(/ufat/g, 'u')

    exibeTexto = exibeTexto.value;

}

botaoDescodifica.addEventListener('click', decodificaTexto);

//-------funcao ativada no segundo botão


//função para o botão de copiar
function copiarTxt() {
    const copiar = document.getElementById('mostraTexto').value;
    if (navigator.clipboard.writeText(copiar)) {
        document.getElementById('btncopia').textContent = 'texto Copiado';//ao clicar em copiar altera o texto escrito
        exibeTexto.value="";

    }
    // 
    setInterval(function () {
        document.getElementById('btncopia').textContent = 'copiar'//volta ao texto original em determinado tempo
    }, 4000
    );
    
}
