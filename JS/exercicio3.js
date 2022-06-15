/* Celsius em Fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit
    e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32

    Se for em celsius a função irá transformar em fahrenheit e se for em fahrenheit irá transformar em celsius.

*/ 

    function convertTemp(temp)
    {
        let escalaDesejada = 0;

        if(temp.includes("c") || temp.includes("C"))
        {
            temp = temp.replace("C", "").replace("c", "");
            escalaDesejada = temp * 9/5 + 32;
        }

        else if(temp.includes("f") || temp.includes("F"))
        {
            temp = temp.replace("F", "").replace("f", "");
            escalaDesejada = (temp - 32) * 5/9;
        }
        
        return escalaDesejada;
    }

    //indexOf mostra a posição.