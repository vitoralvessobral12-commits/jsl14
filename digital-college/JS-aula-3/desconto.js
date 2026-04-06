alert("nossa loja tem alguns descontos, confira agora")

let resposta = prompt('Descontos de roupas, Verde 10% de desconto, Amarelo 20% de desconto, Azul 30% de desconto, vermelho 40% de desconto, qual a cor da sua etiqueta? OBS: verde=V, amarelo=A ,azul=AZ, vermelho=VE')

switch (resposta) {
    case "V":
       prompt("voce adquiriu 10% de desconto")
        break;
    case "A":
        prompt("voce adquiriu 20% de desconto")
        break;
        case "AZ":
        prompt("voce adquiriu 30% de desconto")
        break;
        case "VE":
      prompt("voce adquiriu 40% de desconto")
        break;
    default:
        prompt("voce não adquiriu nenhum desconto")
        break;
}