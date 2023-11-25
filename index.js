
let resultado = calcularWinLoser(400, 1)
let elo = ""

function calcularWinLoser(vitorias, derrotas){
	let ranque = vitorias - derrotas
	return ranque
}

switch(true) {
    case resultado < 10:
        elo = "ferro"
        break
    case resultado >= 11 && resultado <= 20:
        elo = "Bronze"
        break
    case resultado >= 21 && resultado <= 50:
        elo = "Prata"
        break
    case resultado >= 51 && resultado <= 80:
        elo = "Ouro"
        break
    case resultado >= 81 && resultado <= 90:
        elo = "Platina"
        break
    case resultado >= 91 && resultado <= 100:
        elo = "Ascendente"
        break
    case resultado >= 101:
        elo = "Imortal"
        break
    
}

console.log("O Herói tem o saldo de " + resultado + " vitórias e está no nível de " + elo)
