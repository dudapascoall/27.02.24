const sortear = () => { //declaraçao de variavel sortear vai atribuir os nomes das minhas variaveis abaixo
    let nomes = ["hello kitty","barbie","moranguinho","meninas super poderosas","pantera cor de rosa"] //let significa q nao ficara salvo no meu navegador
    
    let h1Nome = document.getElementById("nome"); // o ponto é o metodo;
    
    let achouNumero = false; // o let é quando some e nao fica no servidor;
    let numeroSorteado;
    
    while (achouNumero == false) { //estrutura de repeticao; //comparaçao ==... atribuiçao =;
        numeroSorteado = Math.floor(Math.random() * 100);
        if (numeroSorteado < nomes.length) { // algoritimo de validaçao;
            achouNumero = true;
        }
    }
    //abaixo ocorre os sorteios das minhas variaves..entao caso uma seja sorteado o proximo sorteio ira trocar o nome das minhas variaveis
    switch (numeroSorteado)  {
        case 0: //caso este seja sorteado vou trocar para a outra variavel
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 1: //no caso seria essa e assim ocorre com as outras
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 2:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 3:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 4:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 5:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
    
            default:
                h1Nome.innerText = " o numero sorteado nao tem na lista";
                break;        
    }
    //vou pegar o meu h1Nome e vou atribuir a ele o texto dizendo "o numero sorteado foi" e atribuir mais a minha variavel sorteada
    h1Nome.innerText += " o numero sorteado foi:" + numeroSorteado; //+= recebe a variavel + o q eu quero;
    }