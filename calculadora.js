const calcular = () => { // minha declaraçao de constante calcula
    //vou chamar meus ids do html para fazer algo
    let numero1 = document.getElementById("numero1");
    let numero2 = document.getElementById("numero2");
    let resultado = document.getElementById("resultado");
//o meu resultado vai ser analisado da seguinte forma: a minha variavel1 sera somada com a minha variavel2 e depois disso ira retornar essa soma para o resultado e aparecera no console
    resultado.value = parseInt(numero1.value) + parseInt(numero2.value);
}