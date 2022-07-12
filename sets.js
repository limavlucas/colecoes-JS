// Coleções Chaveadas
// Este repositório contém a atividade prática do Curso "Coleções Chaveadas", que faz parte do Basecamp de Javascript que minstrei pela Digital Innovation One.

// Atividade 2: Sets
// Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.


const meuArr = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];

}

console.log(valoresUnicos(meuArr))