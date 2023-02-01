let hora = 0;
let minuto = 0;
let segundo = 0;
let start = document.getElementById("iniciar");


let tempo = 1000;
let cronometro;

function iniciar(){
    cronometro = setInterval(() => {timer()}, tempo);
    start.style.cssText = "display: none";
}

function pausar() {
    clearInterval(cronometro)  
    start.style.cssText = "display: inline";
}

function resetar(){
    clearInterval(cronometro)

    hora = 0;
    minuto = 0;
    segundo = 0;

    document.getElementById("cronometro").innerText = "00:00:00"
    start.style.cssText = "display: inline";
}

function timer(){

    segundo++;

    if (segundo == 60){
        segundo = 0;
        minuto++;
    }else if(minuto == 60){
        minuto = 0;
        hora++;
    }
    
    let formato = (hora < 10 ? '0'+ hora : hora) + ':' + (minuto < 10 ? '0'+ minuto : minuto) + ':' + (segundo < 10 ? '0' + segundo : segundo)
    document.getElementById("cronometro").innerText = formato
}