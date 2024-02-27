const variaval1 = "valor somente leitura"; //declaracao de variavel com o valor somente leitura
var variaval2 = "valor editavel"; //declaraçao de variavel com o valor editavel

try {  //tentar
    //vou pegar a minha variavel1 e caso mudar o valor aparecerá esta mensagem abaixo
    variaval1 = "valor nao permitido";
    console.log("variavel1 foi alterada para:", variaval1);
} catch (e) { //caso der erro imprimira esta mensagem abaixo
    console.error("ops! ocorreu um erro:", e);
}

try { //tentar
    //vou pegar a minha variavel2 e caso mudar o valor aparecerá esta mensagem abaixo
    variaval2 = "valor permitido";
    console.log(" a variavel2 foi alterada para:", variaval2);
} catch (e) { //caso der erro imprimira esta mensagem abaixo
    console.error("ops! ocorreu um erro:", e);
}