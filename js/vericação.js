const segredo = Math.round(Math.random() * 10);
const input = document.querySelector("input");
const errou = document.querySelector('.modal-erro');
const certo = document.querySelector('.modal-certo');
errou.innerHTML = `
    <p>você errou, o numero correto é ${segredo}</p>
    <button class="tentar-de-novo" onClick="window.location.href=window.location.href">tentar de novo</button>
`

certo.innerHTML= `
    <p>você acertou! o numero correto é ${segredo}</p>
    <button class="tentar-de-novo" onClick="window.location.href=window.location.href">começar de novo</button>
`

console.log(segredo);

function verifica() {
    
    if(input.value == segredo) {
        certo.classList.add('hiden');
    } else {
        errou.classList.add('hiden');
    }
}

const botao = document.querySelector("button");
botao.onclick = verifica;

