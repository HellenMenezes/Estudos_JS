/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []
    
Agora, crie uma função que irá calcular o total de receitas e
despesas e irá mostrar uma mensagem se a família está com
saldo positivo ou negativo, seguido do valor do saldo. 

*/

let gastos = {
    receitas: [14, 15.5, 34.47, 23.5, 32.8],
    despesas: [47.2, 9.5, 8]
}

function calcularReceitas() {
    let soma = 0; 
    for(let i=0; i< gastos.receitas.length; i++)
    {
        soma += gastos.receitas[i];
    }  
    return soma;
}

function calcularDespesas(){
    let soma = 0;
    for(let i=0; i< gastos.despesas.length; i++)   
    {
        soma += gastos.despesas[i];
    }
    return soma;
}

function calcularSaldo(){
    
    return calcularReceitas() - calcularDespesas();
}

    let itsOk = calcularSaldo()>= 0
    let balanceText = "negativo"


    if(itsOk)
    {
       balanceText = "positivo"
       //atualiza o balanceText para positivo se for maior que 0
    }

    console.log(`Seu saldo é ${balanceText}: ${calcularSaldo()}`)
