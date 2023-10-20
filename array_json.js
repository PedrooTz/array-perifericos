// Objetivo: Aprender a utilizar estrutura de array e json
// [] -> Representa a estrutura array
// {} -> Representa a estrutura json

const introducaoArray = function () {
    //Criando um array de forma manual
    let listaDeNomes = ['José', 'Ana', 'Luiz', 'Maria', 'Carlos', 'Eduardo'];

    //Exibe os dados do array
    console.log(listaDeNomes);

    //Exibe os dados do array em formato de tabela
    console.table(listaDeNomes);

    //Retorna a quantidade de elementos no array
    console.log(listaDeNomes.length);

    //Adiciona elementos novos no final da lista
    listaDeNomes.push('Pedro');

    //Adiciona elementos novos no inicio da lista
    listaDeNomes.unshift('Ricardo');
    console.table(listaDeNomes);

    //Remove o último elemento da tabela
    listaDeNomes.pop();
    console.table(listaDeNomes);

    //Remove o primeiro elemento da tabela
    listaDeNomes.shift();
    console.table(listaDeNomes);

    //Remove um elemento baseado no índice, podendo definir a serem excluídos
    //Ex: (2, 3) 2 -> referente a índice e 3 à quantidade de itens
    listaDeNomes.splice(2, 3);
    console.table(listaDeNomes);

    listaDeNomes.push('André da Silva', 'Ricardo Borges', 'João da Silva', 10, true);
    console.log(listaDeNomes);

    //typeof - Retorna o tipo de dados de um elemento
    console.log(typeof (listaDeNomes[7]));

    //Retorna o conteúdo de um elemento
    console.log(listaDeNomes[2]);


}

const percorrendoArray = function () {
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD'];

    //while
    // let cont = 0;
    // while(cont < listaDeProdutos.length){
    //     console.log('Nome do produto: ' + listaDeProdutos[cont]);
    //     cont +=1;
    // }

    //FOR
    //     for(let cont = 0; cont <listaDeProdutos.length; cont++)
    //     console.log('Nome do produto: ' + listaDeProdutos[cont]);
    //}
    //FOREACH
    //     listaDeProdutos.forEach(function(produto, indice){
    //         console.log(indice + ' - Nome do produto: ' + produto)
    //     })

    //Retorna o índice do elemento escolhido
    //Caso não exista o índice buscado, retornará -1
    console.log(listaDeProdutos.indexOf('Impressora'));

    //Retorna verdadeiro ou falso
    console.log(listaDeProdutos.includes('Mouse'))

}

const filtrarProdutos = function (nomeProduto) {
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD'];
    let nome = String(nomeProduto);

    let status = false;
    // return listaDeProdutos.includes(nome);

    listaDeProdutos.forEach(function (produto) {
        if (produto.toUpperCase() == nome.toUpperCase())
            status = true;
    })
    return status;
}

const manipulandoArrayJson = function () {
    /*
    Existem diversos tipos de dados para integração de tecnologias
    Exemplo 1: XML <atributo> valor </atributo>
    Exemplo 2: { atributo: valor } -> JSON 
    */

    // Criando um JSON manual
    let contato = { nome: 'José da Silva', telefone: '47724849', email: 'jose@gmail.com' }
    let contato2 = { nome: 'Maria da Silva', telefone: '47725789', email: 'Maria@gmail.com' }
    let contato3 = { nome: 'Ana da Silva', telefone: '47985753', email: 'Ana@gmail.com' }

    // Criando um array que tem objetos JSON
    let arrayContatos = [contato, contato2, contato3];

    // Criando novos atributos no JSON de forma dinâmca
    contato.celular = '119879696'
    contato.data_nascimento = '2000-12-15'
    contato.idade = 23;


    //Para extrair o atributo do JSON
    console.log('Nome:' + contato.nome);
    console.log('Telefone:' + contato.telefone);
    console.log('Email:' + contato.email);
    console.log('Celular:' + contato.celular);
    console.log('Data de Nascimento:' + contato.data_nascimento);
    console.log('Idade:' + contato.idade);


    //console.log(arrayContatos);

    // console.log(arrayContatos[0]);
    // console.log(arrayContatos[1]);
    // console.log(arrayContatos[0].nome);

    // Percorrendo ARRAY e JSON



    arrayContatos.forEach(function (dados) {
        console.log('Nome:' + dados.nome);
        console.log('Telefone:' + dados.telefone);
        console.log('Email:' + dados.email);

        // Tratamento para validar a impressão dos valores
        if (dados.celular != undefined)
            console.log('Celular:' + dados.celular);
        if (dados.data_nascimento != undefined)
            console.log('Data de Nascimento:' + dados.data_nascimento);
        if (dados.idade != undefined)
            console.log('Idade:' + dados.idade);
        console.log('-----------------------------------------------------------');

    });





}
const produtosArrayJson = function () {
    let listaCores = [
        { id: 1, nome_cor: 'Preto' },
        { id: 2, nome: 'Branco' },
        { id: 3, nome: 'Cinza' },
        { id: 4, nome: 'Rosa' },
        { id: 5, nome: 'Vermelho' },
        { id: 6, nome: 'Azul' }
    ];

    let listaMarca = [
        { id: 1, nome_marca: 'Dell' },
        { id: 2, nome: 'Lenovo' },
        { id: 3, nome: 'Apple' },
        { id: 4, nome: 'Logitech' },
        { id: 5, nome: 'Positivo' },
        { id: 6, nome: 'Multilaser' },
        { id: 7, nome: 'Razer' },

    ];

    let listaCategorias = [
        { id: 1, nome_categorias: 'Hardware', descricao: 'Hardware' },
        { id: 2, nome: 'Periférico', descricao: 'Periférico' },
        { id: 3, nome: 'Gamer', descricao: 'Gamer' },
        { id: 4, nome: 'Acessório', descricao: 'Acessório' }
    ];

    // Cria um objeto do tipo JSON para o array de produtos
    let JSONProdutos = {};

    // Cria um objeto do tipo ARRAY para guardar os produtos
    let ARRAYProdutos = [];

    // Objeto para criar os produtos
    let produto1 = {
        id: 1,
         nome: 'Mouse', 
         descricao: 'Mouse óptico com fio', 
         categoria: listaCategorias[1],
         marca: listaMarca[0],
         cor: [
            listaCores[0],
            listaCores[1],
            listaCores[2]
         ]
        }
    let produto2 = {
            id: 2,
             nome: 'Teclado', 
             descricao: 'Teclado com fio padrão ABNT', 
             categoria: listaCategorias[1],
             marca: listaMarca[3],
             cor: listaCores 
             
         }
         let produto3 = {
            id: 2,
             nome: 'Headset', 
             descricao: 'Fone gamer com microfone', 
             categoria: listaCategorias[2],
             marca: listaMarca[1],
             cor: listaCores[1]
             
         }
         let produto4 = {
            id: 2,
             nome: 'Monitor', 
             descricao: 'Monitor ultra wide painel ips 165hz', 
             categoria: listaCategorias[2],
             marca: listaMarca[1],
             cor: listaCores[1]
             
         }


    // Adicionando os produtos no ARRAY de produtos
    ARRAYProdutos.push(produto1);
    ARRAYProdutos.push(produto2);
    ARRAYProdutos.push(produto3);
    ARRAYProdutos.push(produto4);

    // Adiciona o produto e coloca o array de produtos
    JSONProdutos.produtos = ARRAYProdutos;
    // Aidiciona o atributo do count e coloca a quantidade de produtos
    JSONProdutos.count = ARRAYProdutos.length;
    // Adiciona o atributo status e coloca o codigo 200 de requisição bem sucedida
    JSONProdutos.status = 200;



        console.log(JSONProdutos);
}
// produtosArrayJson();

// manipulandoArrayJson();

// console.log(filtrarProdutos('not'));

//percorrendoArray();

//introducaoArray();