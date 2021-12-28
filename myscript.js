let numeriCasuali = [];
let contenitoreNumeri = document.querySelector('.contenitoreNumeri');

for (x=0;x<5;x++){
    numeriCasuali[x] = Math.round(Math.random()*100);
    contenitoreNumeri.innerHTML += '<div>' + numeriCasuali[x] + '</div>';
}

setTimeout(darkblue,29950);
setTimeout(inserimentoNumeri,30000);

function darkblue(){
    contenitoreNumeri.style.color = 'darkblue';
}

function inserimentoNumeri(){
    let numeriAzzeccati = 0;
    let paragrafo = document.querySelector('.paragrafo');
    for (x=0;x<5;x++){
        y = x+1;
        numero = parseInt (prompt('Inserisci il ' + y + '° numero:'));
        if (numero==numeriCasuali[x]){
            let numeroContenitore = document.querySelector('.contenitoreNumeri>div:nth-of-type(' + y + ')');
            numeriAzzeccati++;
            numeroContenitore.style.color = 'aqua';
            numeroContenitore.style.fontSize = '30px';
        }
    }
    contenitoreNumeri.style.color = 'white';
    paragrafo.innerHTML = 'Hai individuato ' + numeriAzzeccati + ' numeri della sequenza originale';
}