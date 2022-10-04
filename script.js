var jogador = 'X';
var ganhador = null;
var jogadorSelected = document.getElementById('jogadorSelecionado');
var ganhadorSelected = document.getElementById('ganhadorSelecionado');

changeJogador('X');

function changeJogador(valor) {
    jogadorSelecionado.innerHTML = jogador;
    jogador = valor;
}

function marcado(id) {
    var caixa = document.getElementById(id);
    if (caixa.innerHTML !== ' ') {
        return;
    }

    caixa.innerHTML = jogador;

    if (jogador === 'X') {
        caixa.style.color = 'red';
        jogador = 'O';
    } else {
        caixa.style.color = 'blue';
        jogador = 'X';
    }

    changeJogador(jogador);
    checksGanhador();
}


function checksGanhador() {
    var caixa1 = document.getElementById(1);
    var caixa2 = document.getElementById(2);
    var caixa3 = document.getElementById(3);
    var caixa4 = document.getElementById(4);
    var caixa5 = document.getElementById(5);
    var caixa6 = document.getElementById(6);
    var caixa7 = document.getElementById(7);
    var caixa8 = document.getElementById(8);
    var caixa9 = document.getElementById(9);
    
    if (checkSequencia(caixa1, caixa2, caixa3)) {
        changesColorCaixa(caixa1, caixa2, caixa3);
        changeGanhador(caixa1);
        return;
    }

    if (checkSequencia(caixa4, caixa5, caixa6)) {
        changesColorCaixa(caixa4, caixa5, caixa6);
        changeGanhador(caixa4);
        return;
    }

    if (checkSequencia(caixa7, caixa8, caixa9)) {
        changesColorCaixa(caixa7, caixa8, caixa9);
        changeGanhador(caixa7);
        return;
    }

    if (checkSequencia(caixa1, caixa4, caixa7)) {
        changesColorCaixa(caixa1, caixa4, caixa7);
        changeGanhador(caixa1);
        return;
    }

    if (checkSequencia(caixa2, caixa5, caixa8)) {
        changesColorCaixa(caixa2, caixa5, caixa8);
        changeGanhador(caixa2);
        return;
    }

    if (checkSequencia(caixa3, caixa6, caixa9)) {
        changesColorCaixa(caixa3, caixa6, caixa9);
        changeGanhador(caixa3);
        return;
    }

    if (checkSequencia(caixa1, caixa5, caixa9)) {
        changesColorCaixa(caixa1, caixa5, caixa9);
        changeGanhador(caixa1);
        return;
    }

    if (checkSequencia(caixa3, caixa5, caixa7)) {
        changesColorCaixa(caixa3, caixa5, caixa7);
        changeGanhador(caixa3);
    }
}


function changeGanhador(caixa){
    ganhador = caixa.innerHTML;
}

function changesColorCaixa(caixa1, caixa2, caixa3) {
    caixa1.style.background = '#e0f003';
    caixa2.style.background = '#e0f003';
    caixa3.style.background = '#e0f003';
}

function checkSequencia(caixa1, caixa2, caixa3) {
    var eigual = false;

    if (caixa1.innerHTML !== ' ' && caixa1.innerHTML === caixa2.innerHTML && caixa2.innerHTML === caixa3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function restart(){
    for (var i = 1; i <= 9; i++){
        var caixa = document.getElementById(i);
        caixa.style.background = '#1a1919';
        caixa.style.color = 'blue';
        caixa.innerHTML = ' ';
    }

    changeJogador('X');
}


