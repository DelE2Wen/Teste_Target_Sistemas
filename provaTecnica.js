//desafio 1
function desafio1(){
    console.log("desafio 1:");
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    console.log(SOMA); //será retornado 91
}
desafio1();

//desafio 2
function desafio2(){
    console.log("desafio 2:");
    function fibonacci(numero) {
        let a = 0, b = 1, termo = 0;

        while (termo < numero) {
            termo = a + b;
            a = b;
            b = termo;
        }

        return termo === numero || numero === 0;
    }

    // Examinador, chegar é o número que será verificado.
    const checar = 0;

    if (fibonacci(checar)) {
        console.log(`O ${checar} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O ${checar} não pertence à sequência de Fibonacci.`);
    }
}
desafio2()

//desafio 3
function desafio3(){
    console.log("desafio 3:");
    // valores para o mês de setembro
    //null são dias sem faturamento
    const diasSetembro = {
        "faturamento": [
            {"dia": 1, "valor": 2210.50},
            {"dia": 2, "valor": 2340.75},
            {"dia": 3, "valor": null},
            {"dia": 4, "valor": 1980.00},
            {"dia": 5, "valor": null},
            {"dia": 6, "valor": 2450.30},
            {"dia": 7, "valor": 2100.00},
            {"dia": 8, "valor": 2300.00},
            {"dia": 9, "valor": 2200.00},
            {"dia": 10, "valor": null},
            {"dia": 11, "valor": 2500.00},
            {"dia": 12, "valor": 2400.00},
            {"dia": 13, "valor": null},
            {"dia": 14, "valor": 2600.00},
            {"dia": 15, "valor": 2700.00},
            {"dia": 16, "valor": null},
            {"dia": 17, "valor": 2800.00},
            {"dia": 18, "valor": 2900.00},
            {"dia": 19, "valor": null},
            {"dia": 20, "valor": 3000.00},
            {"dia": 21, "valor": 3100.00},
            {"dia": 22, "valor": null},
            {"dia": 23, "valor": 3200.00},
            {"dia": 24, "valor": 3300.00},
            {"dia": 25, "valor": null},
            {"dia": 26, "valor": 3400.00},
            {"dia": 27, "valor": 3500.00},
            {"dia": 28, "valor": null},
            {"dia": 29, "valor": 3600.00},
            {"dia": 30, "valor": 3700.00}
        ]
    };

    //filtrar dias com faturamento usando o método filter
    const diasComFaturamento = diasSetembro.faturamento.filter(dia => dia.valor !== null);

    //calculando o maior e meno faturamento
    let menorFaturamento = diasComFaturamento[0].valor;
    let maiorFaturamento = diasComFaturamento[0].valor;
    let totalFaturamento = 0;

    for (const dia of diasComFaturamento) {
        if (dia.valor < menorFaturamento) {
            menorFaturamento = dia.valor;
        }
        if (dia.valor > maiorFaturamento) {
            maiorFaturamento = dia.valor;
        }
        totalFaturamento += dia.valor;
    }
    const mediaMensal = totalFaturamento / diasComFaturamento.length;

    let diasAcimaMedia = 0;
    for (const dia of diasComFaturamento) {
        if (dia.valor > mediaMensal) {
            diasAcimaMedia++;
        }
    }

    console.log(`Menor valor de faturamento: R$${menorFaturamento.toFixed(2)} e o maior: ${maiorFaturamento.toFixed(2)}`);
    console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`);
}
desafio3();


//desafio 4
function desafio4(){
    console.log("desafio 4:");

    const faturamento = {
        "SP": 67836.43,
        "RJ": 36678.66,
        "MG": 29229.88,
        "ES": 27165.48,
        "Outros": 19849.53
    };

    let totalFaturamento = 0;
    for (const estado in faturamento) {
        //aqui uso o valor computado estado no objeto faturamento
        totalFaturamento += faturamento[estado];
    }

    const percentuais = {};
    for (const estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2);
    }

    for (const estado in percentuais) {
        console.log(`${estado}: ${percentuais[estado]}%`);
    }
}

//desafio 5
function desafio5(){
    console.log("desafio 5:");


    function inverterString(valor) {
        //armazena
        let stringInvertida = "";
        //examinador, isso funciona devido a String ser cadeia de char e cada char tem sua posição indexada.
        for (let i = valor.length - 1; i >= 0; i--) {
            //concatena valores
            stringInvertida += valor[i];
        }
        return stringInvertida;
    }

    const stringEntrada = "Target Sistemas";
    const stringInvertida = inverterString(stringEntrada);

    console.log(`A string ${stringEntrada} foi invertida para ${stringInvertida}`);
}
desafio5();