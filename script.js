balance(79, 45);

switch(true){
    case (victoryBalance > 0 && victoryBalance <= 10):
        rank = "Ferro";
        break;
    case (victoryBalance > 11 && victoryBalance <= 20):
        rank = "Bronze";
        break;
    case (victoryBalance > 21 && victoryBalance <= 50):
        rank = "Prata";
        break;
    case (victoryBalance > 51 && victoryBalance <= 80):
        rank = "Ouro";
        break;
    case (victoryBalance > 81 && victoryBalance <= 90):
        rank = "Diamante";
        break;
    case (victoryBalance > 91 && victoryBalance <= 100):
        rank = "Lendário";
        break;
    case victoryBalance >=101:
        rank = "Imortal";
        break;    
    default:
        rank = "Sem Rank";
        break;
}
function balance(victory, defeat){
    victoryBalance = victory - defeat;
    return victoryBalance;
}
console.log("O Herói tem saldo de vitórias de " + victoryBalance + " e está no Rank " + rank);
