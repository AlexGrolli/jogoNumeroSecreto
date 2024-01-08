let listaDeNumeroSorteados = [];
let limiteNumero = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 0;

function exibirTextoNaTela(tag,texto){
let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.2});
}
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * limiteNumero + 1 );
    quantidadeElementosNaLista = listaDeNumeroSorteados.length;

    if (quantidadeElementosNaLista == limiteNumero){
        listaDeNumeroSorteados = [];
    }
    if (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}
function mensagemInicial(){
    exibirTextoNaTela("h1","Jogo do numero secreto");
    exibirTextoNaTela("p","Escolha um numero entre 1 e 10");
}
mensagemInicial();
//Quem esta chamando a funcao e a tag button onclick no html
function verificarChute(){
    let chute = document.querySelector("input").value
    tentativa++;
    console.log(tentativa);
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1","Acertou!");
        palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        exibirTextoNaTela("p",`Você descobriu o número secreto com ${tentativa}   ${palavraTentativa}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        limparCampo();        
    }else{
        if(chute < numeroSecreto){
            exibirTextoNaTela("p",`O número secreto é maior que ${chute}`);
        }else{
            exibirTextoNaTela("p",`O número secreto é menor que ${chute}`);
        }
        
    }
}
//Quem esta chamando a funcao e a tag input onclick no html
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativa = 0;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}