// Criar um algoritmo que verifica a idade e valida a necessidade de uma pessoa votar
// Não possui idade
// Obrigatorio 
// Facultativo

// Declarações
// const = nome "";
// let idade = "";

// Desenvolvimento
// 16 facultativo
// 18 obrigatorio
// 65 facultativo

 const nome = "Matheus";
 let idade = 50;

    if (idade >= 16 && idade < 18  || idade > 65){
        console.log(`${nome} tem ${idade} anos e tem o voto facultativo`)
    }else if(idade < 16){
        console.log(`${nome} tem ${idade} anos e não pode votar`)
    }else{
        console.log(`${nome} tem ${idade} anos e tem o voto obrigatorio`)
    }

// Informar o nome e a classificação de obrigatoriedade de votar 