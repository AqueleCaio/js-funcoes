function soma(n1=null, n2=null){
    let resp = n1 + n2;
    return console.log(`${n1} + ${n2} = ${resp}`);
}

//Definimos os parametros como null para caso for passado somente um parametro a soma será x + null(0) = x, evitando erro.

soma()

let pessoa = {nome: 'Caio',
              idade: '20', 
              peso: 20.9,
              pesar(peso=null){
                this.peso += peso
              }
            }

pessoa.pesar(4);
console.log(`peso atual: ${pessoa.peso}kg`);

// Para criar uma variável do tipo dicionário ou objeto, devemos referenciá-la com {}

// É possível criar funções e armazená-las em variáveis ou em dicionários.

// Para usar as propriedades do dicionário nas funções devemos referenciar essa propriedade com um this. no antes de chamá-la
